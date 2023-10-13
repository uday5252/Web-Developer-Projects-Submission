const inputMoney=document.getElementById("inputMoney")
const submitButton=document.getElementById("btn");
const result=document.getElementById("result");

submitButton.addEventListener("click", () => {
  const money = parseInt(inputMoney.value);
  if (isNaN(money)) {
      alert("Please enter the amount");
      return;
  }

  IceCream(money)
      .then((message) => {
          result.innerText = message;
          inputMoney.value="";

      })
      .catch((error) => {
          result.innerText = error;
          inputMoney.value="";
      });
});

function IceCream(money) {
  return new Promise((resolve, reject) => {
      if (money >= 5) {
          resolve("Enjoy your ice cream!!");
      } else {
          reject("Sorry, you don't have enough money for ice cream.");
      }
  });
}



