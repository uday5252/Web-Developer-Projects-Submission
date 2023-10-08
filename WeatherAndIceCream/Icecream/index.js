const btnClick = document.querySelector('button')
const ipClick = document.querySelector('input')



btnClick.addEventListener('click',(e)=>{
   const iceCream = ()=>{
       new Promise((resolve,reject)=>{
            if(ipClick.value >= 5){
                 resolve("Success Placed Item")
            }
            else{
                 reject("No Item is placed")
            }
       })
       .then((data)=>{
        document.getElementById('inputvalidate').innerHTML = data
       })
       .catch(err=>{
        document.getElementById('inputvalidate').innerHTML = err
       })
   }


   if(ipClick.value === ''){
      document.getElementById('inputvalidate').innerHTML = "Please Enter the input Value"
   }
   else{
      iceCream()
   }

})