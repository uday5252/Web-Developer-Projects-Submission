const videoFile = document.querySelector("video")
const playPause = document.querySelector("#play")

let myProgressBar = document.querySelector(".progressBar")
const ProgressContainer = document.querySelector(".progressContainer")
// console.log(myProgressBar)

let isVideoRealyPlaying = false

function playVideo(){
    videoFile.play()
    playPause.classList.replace("fa-play", "fa-pause")
    isVideoRealyPlaying = true
}

function pauseVideo(){
    videoFile.pause()
    playPause.classList.replace("fa-pause", "fa-play")
    isVideoRealyPlaying = false
}

playPause.addEventListener("click", (event)=>{
    if(isVideoRealyPlaying){
        pauseVideo()
    }
    else{
        playVideo()
    }

})

let myCurrentVideoTime = document.querySelector(".currentTime")
let myDurationVideoTime = document.querySelector(".duration")

// console.log(myCurrentTime, myDuration)

videoFile.addEventListener("timeupdate", (event)=>{

    let myCurrentTime = event.srcElement.currentTime 
    let myDuration = event.srcElement.duration

    let myCurrentTimeInMin = Math.floor(myCurrentTime / 60)
    let myCurrentTimeInSec = Math.floor(myCurrentTime % 60)
    
    let myDurationTimeInMin = Math.floor(myDuration / 60)
    let myDurationTimeInSec = Math.floor(myDuration % 60)

    let myVideoProgressBarWidth = (myCurrentTime / myDuration) * 100

    // console.log(myCurrentTimeInMin, myCurrentTimeInSec, myDurationTimeInMin, myDurationTimeInSec)

    // console.log(myVideoProgressBarWidth)

    if(myCurrentTimeInSec < 10){
        myCurrentTimeInSec = `0${myCurrentTimeInSec}`
        // console.log(myCurrentTimeInSec)
    }
    myCurrentVideoTime.textContent = (`${myCurrentTimeInMin}:${myCurrentTimeInSec}`)
    // console.log(myCurrentTime)

    if(myDurationTimeInSec < 10){
        myDurationTimeInSec = `0${myDurationTimeInSec}`
    }
    myDurationVideoTime.textContent = (`${myDurationTimeInMin}:${myDurationTimeInSec}`)
    // myDurationVideoTime.textContent = videoFile.duration.toFixed(2)
    // console.log(`${myDurationTimeInMin}:${myDurationTimeInSec}`)

    myProgressBar.style.width = `${myVideoProgressBarWidth}%`
})

ProgressContainer.addEventListener("click", (event)=>{
    let clickTotalDuration = event.srcElement.offsetWidth
    let clickedWidth = event.offsetX

    let clickedPercentage = (clickedWidth / clickTotalDuration) * 100
    // console.log(clickedPercentage)
    myProgressBar.style.width = `${clickedPercentage}%`

    videoFile.currentTime = (clickedWidth / clickTotalDuration) * videoFile.duration
    // console.log((clickedWidth / clickTotalDuration) * videoFile.duration)
    console.log(clickTotalDuration)
    console.log(videoFile.duration)


})

const forwardButton = document.querySelector("#forward")
const backwardButton = document.querySelector("#backward")

forwardButton.addEventListener("click", ()=>{
    videoFile.currentTime += 5
    // console.log(videoFile.currentTime)
})
backwardButton.addEventListener("click", ()=>{
    videoFile.currentTime -= 5
    // console.log(videoFile.currentTime)
})
const ProgressVolumeContainer = document.querySelector(".progressVolumeContainer")
const ProgressVolumeBar = document.querySelector(".progressVolumeBar")

ProgressVolumeContainer.addEventListener("click", (event)=>{
    let clickTotalDuration = event.srcElement.offsetWidth
    let clickedWidth = event.offsetX

    let clickedPercentage = (clickedWidth / clickTotalDuration) * 100
    // console.log(clickedPercentage)
    ProgressVolumeBar.style.width = `${clickedPercentage}%`

    let volumeInfo = (clickedWidth / clickTotalDuration)
    
    if(volumeInfo < 0.1){
        videoFile.volume = 0.1
    }
    else if(volumeInfo < 0.2){
        videoFile.volume = 0.2
    }
    else if(volumeInfo < 0.4){
        videoFile.volume = 0.4
    }
    else if(volumeInfo < 0.6){
        videoFile.volume = 0.6
    }
    else if(volumeInfo < 0.8){
        videoFile.volume = 0.8
    }
    else{
        videoFile.volume = 1
    }
})

{/* <i class="fa-solid fa-volume-high" id="volume"></i> */}
{/* <i class="fa-solid fa-volume-xmark"></i> */}

const volumeButton = document.querySelector("#volume")
// console.log(videoFile.volume)
let isReallyMute = false
function mute(){
    videoFile.volume = 0
    ProgressVolumeBar.style.width = `0%`
    volumeButton.classList.replace("fa-volume-high", "fa-volume-xmark")
    isReallyMute = true
}
function unMute(){
    videoFile.volume = 0.5
    volumeButton.classList.replace("fa-volume-xmark", "fa-volume-high")
    ProgressVolumeBar.style.width = `50%`
    isReallyMute = false
}
volumeButton.addEventListener("click", ()=>{
    if(!isReallyMute){
        mute()
    }
    else{
        unMute()
    }
})

const videoSpeed =  document.querySelector("#speed")

videoSpeed.addEventListener("change", (change)=>{
    videoFile.playbackRate = videoSpeed.value

})

const myFullScreen = document.querySelector("#full")
console.log(myFullScreen)
const myVideoParent = document.querySelector(".parent")
console.log(myVideoParent)
const myVideoContainer = document.querySelector(".container")
console.log(myVideoContainer)

let isInFullScreen =  false

myFullScreen.addEventListener("click", ()=>{

    if(!isInFullScreen){
        // videoFile.classList.add(".editedClass")
        myVideoContainer.requestFullscreen()
    }
    else{
        myVideoContainer.exitFullscreen()
    }
})
