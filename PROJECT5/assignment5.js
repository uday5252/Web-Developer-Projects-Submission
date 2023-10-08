document.addEventListener("DOMContentLoaded", () => {
    const buyButton = document.getElementById("buyButton");
    const moneyInput = document.getElementById("moneyInput");
    const message = document.getElementById("message");

    buyButton.addEventListener("click", () => {
        const money = parseFloat(moneyInput.value);
        if (isNaN(money)) {
            message.textContent = "Please enter a valid amount.";
            return;
        }

        buyIceCream(money)
            .then(() => {
                message.textContent = "Enjoy your ice cream!";

            })
            .catch((error) => {
                message.textContent = "NOT ENOUGH MONEY";
            });
    });

    function buyIceCream(money) {
        return new Promise((resolve, reject) => {
            if (money >= 5) {
                resolve();
            } else {
                reject("Sorry, you don't have enough money to buy ice cream.");
            }
        });
    }
});
