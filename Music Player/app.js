const audiofile = document.querySelector("#musicFile1")

const playButton = document.querySelector("#play")

let isAudioPlaying = false

function playAudio(){
   // console.log("hi")
   isAudioPlaying = true
   audiofile.play()
   playButton.classList.replace("fa-play", "fa-pause")

}
function pauseAudio(){
   // console.log("hi")
   isAudioPlaying = false
   audiofile.pause()
   playButton.classList.replace("fa-pause", "fa-play")

}
function forwardAudio(){
   songDataNumber++

   if(songDataNumber > songsData.length - 1)
   {
      songDataNumber = 0
   }
   // console.log(songDataNumber)
   changeSong(songsData[songDataNumber])

   playAudio()
}
function backwardAudio(){

   songDataNumber--

   if(songDataNumber < 0)
   {
      songDataNumber = songsData.length - 1
   }
   // console.log(songDataNumber)
   changeSong(songsData[songDataNumber])

   playAudio()
}

playButton.addEventListener("click", ()=>{
   if(!isAudioPlaying){
      playAudio()
      // console.log("hi")
   }
   else{
      pauseAudio()
      // console.log("hi")

   }
})

let songsData = [
   {songName : "FALLINIG",singerName : "Tame Impala",data : "music-2", color: "#994637"},
   {songName : "Starboy",singerName : "The Weekend",data : "music-3", color: "#e3022f"},
   {songName : "Borderline",singerName : "RedBone",data : "music-4", color: "#453148"},
   {songName : "There's No Way",singerName : "(feat. julia Michaels)",data : "music-1", color: "#7b254a"},

]
const songNameVariable = document.querySelector("#displaySongName")
const singerNameVariable = document.querySelector("#displaySingerName")
const imageVariable = document.querySelector(".displayImage")
const myBody = document.querySelector("body")

const myProgressBar = document.querySelector(".progressBar")

const myDisplaySongData = document.querySelector("#displaySongData")


function changeSong(info){
   songNameVariable.textContent = info.songName
   singerNameVariable.textContent = info.singerName
   imageVariable.setAttribute("src", `images/${info.data}.jpg`)
   audiofile.setAttribute("src", `audio/${info.data}.mp3`)
   myBody.style.backgroundColor = info.color

   myProgressBar.style.backgroundColor = info.color
   
   myDisplaySongData.textContent = info.songName

}

const forwardButton = document.querySelector("#forward")
const backwardButton = document.querySelector("#backward")


let songDataNumber = -1
forwardButton.addEventListener("click", forwardAudio);


backwardButton.addEventListener("click", backwardAudio)

const myCurrentAudioTime = document.querySelector(".currentaudioTime")
const myDurationAudioTime = document.querySelector(".audioDuration")


audiofile.addEventListener("timeupdate", function(event)
{
   let myCurrentTime = event.srcElement.currentTime
   const myDuration = event.srcElement.duration

   let myCurrentTimeInMin = Math.floor(myCurrentTime / 60)
   let myCurrentTimeInSec = Math.floor(myCurrentTime % 60) 

   let myDurationTimeInMin = Math.floor(myDuration / 60)
   let myDurationTimeInSec = Math.floor(myDuration % 60)

   let progressBarWidth = (myCurrentTime / myDuration) * 100
   
   if(myDurationTimeInSec < 10)
   {
      myDurationTimeInSec = `0${myDurationTimeInSec}`
   }
   myDurationAudioTime.textContent = (`${myDurationTimeInMin}:${myDurationTimeInSec}`)


   if(myCurrentTimeInSec < 10)
   {
      myCurrentTimeInSec = `0${myCurrentTimeInSec}`
   }
   myCurrentAudioTime.textContent = (`${myCurrentTimeInMin}:${myCurrentTimeInSec}`)

   myProgressBar.style.width = `${progressBarWidth}%`

})

const ProgressContainer = document.querySelector(".progressContainer")

ProgressContainer.addEventListener("click", (event)=>{
   let progressContainerTotalWidth = (event.srcElement.offsetWidth)
   let progressContainerClickedWidth = (event.offsetX)

   let myProgressBarClickedWidth = (progressContainerClickedWidth / progressContainerTotalWidth) *  100
   
   myProgressBar.style.width = `${myProgressBarClickedWidth}%`
   
   audiofile.currentTime = (progressContainerClickedWidth / progressContainerTotalWidth) * audiofile.duration

   playAudio()
   // console.log(myProgressBarClickedWidth)

})

audiofile.addEventListener("ended", forwardAudio,);

const myMusicAnimation = document.querySelector(".musicAnimationParent")
console.log(myMusicAnimation)

audiofile.addEventListener("play", ()=>{
   imageVariable.classList.replace("displayImage", "imageRotateAnimation")
   myMusicAnimation.classList.replace("musicAnimationParent", "addMusicAnimationParent")

})
audiofile.addEventListener("pause", ()=>{
   imageVariable.classList.replace("imageRotateAnimation", "displayImage")
   myMusicAnimation.classList.replace("addMusicAnimationParent", "musicAnimationParent")
})

