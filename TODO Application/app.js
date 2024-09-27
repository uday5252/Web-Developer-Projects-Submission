// TODO APPLICTION

const myInput = document.querySelector(".inputBox")
// const input = myInput.value
// console.log(input)

const myButton = document.querySelector("button")

const MyTaskList = document.querySelector("ul")

myButton.addEventListener("click", ()=>
{
    if(myInput.value == "")
    {
       alert("Please enter the Task!")
    }
    else{
        let myTaskList = myInput.value
        let myList = document.createElement("li")
        myList.innerHTML = `${myTaskList} <i class="fa-solid fa-xmark"></i>`
        console.log(myList)

        MyTaskList.append(myList)

        myInput.value = ""


        let removeButton = myList.querySelector("i")
        removeButton.addEventListener("click", ()=>
        {
            myList.remove()
        })
    }
})