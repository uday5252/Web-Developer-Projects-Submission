
const myText = document.querySelector("input")

const myButton = document.querySelector("button")

let myDiv = document.querySelector(".qrImage")

myButton.addEventListener("click", ()=>
{
    if(myText.value == "") {
        alert("Please Enter Text!")
    }
    else {
            // console.log("hi")
        let myImg = document.createElement("img")
        let myQrName = document.createElement("h2")
        // console.log(myDiv)

        if(myDiv.childElementCount) {
            let prevImg = document.querySelector("#zoro")
            prevImg.remove()
        }

        // myDiv.removeChild()

        myImg.setAttribute("src",`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${myText.value}`)
        myImg.setAttribute("id", "zoro")
        // myQrName = myText.value

        // myDiv.append(myQrImage.textContent)
        myDiv.append(myImg)

        myText.value = ""

        // console.log(myDiv.childElementCount)

    }
    

})
    // myDiv.remove(myImg)
