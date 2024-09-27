// console.log("zoro")
const containerDiv = document.querySelector("#container")
// const expandingImage = document.querySelectorAll(".displayImage")
const imageDiv = document.getElementsByClassName("displayImage")
// console.log(imageDiv)
// console.log(imageDiv[0].classList)
// const myh2 = document.querySelector("h2")
// const myh4 = document.querySelector("h4")
// console.log(myh2, myh4)

// expandingImage.forEach((image)=> {
//     image.addEventListener("click", (event)=> {
//         expandingImage.forEach((image)=> image.style.width = "120px")
//         image.style.width = "700px"
//         // image.id = "expandedImage"

//     })

// })

// expandingImage.forEach((image)=> {
//     image.addEventListener("click", ()=> {
//         expandingImage.forEach((image)=> image.style.width = "120px")

//         image.classList.replace("image", "editedClass")
//         console.log("zoro")

//     })
// })

// containerDiv.addEventListener("click", ()=> {
//     for(let i = 0; i <= imageDiv.length; i++){
//         console.log(i)
//     }
// })

for(let i = 0; i < imageDiv.length; i++){
    // console.log(i)


 

    imageDiv[i].addEventListener("click", (current)=> {
        
        for(let i = 0; i < imageDiv.length; i++){
            imageDiv[i].classList.remove("active")
        }
        console.log(imageDiv[i].className)
    
        imageDiv[i].className += " active"
        // console.log(current)
        console.log(i)
    })
}