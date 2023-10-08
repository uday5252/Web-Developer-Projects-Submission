console.log("Hello Welcome")

let arr = []  

document.getElementById('submits').addEventListener('submit', (e)=>{
    e.preventDefault()
    console.log("first")
    console.log(document.getElementById('minimum').value)
    let  MinimumValue = document.getElementById('minimum').value 
    let  MaximumValue = document.getElementById('maximum').value
     
       if(MinimumValue > MaximumValue){
            let max = MaximumValue;
            MaximumValue = MinimumValue
            MinimumValue = max
        }
    

        console.log(MinimumValue , MaximumValue , "func")
    
     document.querySelector('#rangeinfo').innerHTML = `User can enter from above range limit number to guess min ${MinimumValue } and max ${MaximumValue}`
    
    let  number = Math.floor(Math.random()*(Number(MaximumValue)-Number(MinimumValue))+1+(Number(MinimumValue)))
    let count = 3
    console.log(number , "num")
    document.getElementById('submit').addEventListener('submit',(e)=>{
          e.preventDefault()
          let value = document.getElementById('user').value
          count--
          new Promise((resolve, reject)=>{
              if(  number === parseInt(value))
              {
                 resolve("Congrats , You Guessed the Number 😊")
                 document.querySelector("#ended").style.display = "flex"
              }
              else if(parseInt(value) < number){
                 resolve("Too low 😒")
              }
              else if( parseInt(value) > MaximumValue ){
                 reject("Out of values")
              }
              else{
                  resolve("Too high 😤")
              }
          }).then((data)=>{
             document.querySelector("#result").innerHTML = data
          })
          .catch((err)=>{
              document.querySelector("#result").innerHTML = err
              document.querySelector("#ended").style.display = "flex"
          })
          if(count === 0){
             document.querySelector('#ended').style.display = "flex"
          }
          document.querySelector("#count").innerHTML = count
    })
   
    document.querySelector('.restart').addEventListener('click',()=>{
          window.location.reload()
    })


})






