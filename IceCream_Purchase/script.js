const iceCreamData = [
    {
        name: "Vanilla Ice Cream",
        price: 2.50,
        flavors: ["Vanilla", "Chocolate Syrup", "Sprinkles"],
        description: "Classic vanilla ice cream topped with rich chocolate syrup and colorful sprinkles.",
        image: "vanilla.jpg"
    },  
    {   
        name: "Chocolate Chip Cookie Dough",
        price: 3.00,
        flavors: ["Chocolate", "Cookie Dough", "Cookie Dough Chunks", "Chocolate Chips"],
        description: "Creamy chocolate ice cream with chunks of cookie dough and chocolate chips.",
        image: "cookie_dough.jpg"
    },  
    {   
        name: "Strawberry Sorbet",
        price: 2.75,
        flavors: ["Strawberry", "Fresh Strawberries"],
        description: "Refreshing strawberry sorbet topped with slices of fresh strawberries.",
        image: "strawberry_sorbet.jpg"
    },  
    {   
        name: "Mint Chocolate Chip",
        price: 3.25,
        flavors: ["Mint", "Chocolate" ,"Chocolate Chips"],
        description: "Cool and refreshing mint ice cream loaded with chocolate chips.",
        image: "mint_chip.jpg"
    },
    {
        name: "Cookies and Cream",
        price: 3.50,
        flavors: ["Vanilla", "Chocolate","Crushed Cookies"],
        description: "Creamy vanilla and chocolate ice cream with crushed cookies mixed in.",
        image: "cookies_cream.jpg"
    },
    {
        name: "Rocky Road",
        price: 3.75,
        flavors: ["Chocolate", "Nuts", "Marshmallows", "Almonds", "Marshmallows"],
        description: "Rich chocolate ice cream with almonds and fluffy marshmallows.",
        image: "rocky_road.jpg"
    },
    {
        name: "Caramel Swirl",
        price: 3.25,
        flavors: ["Vanilla", "Caramel", "Caramel Sauce", "Whipped Cream"],
        description: "Smooth vanilla ice cream with a delicious swirl of caramel and whipped cream on top.",
        image: "caramel_swirl.jpg"
    },
    {
        name: "Pistachio",
        price: 3.00,
        flavors: ["Pistachio", "Chopped Pistachios"],
        description: "Nutty pistachio ice cream with a generous serving of chopped pistachios.",
        image: "pistachio.jpg"
    }
];

// console.log(iceCreamData.length)

const iceCreamList = document.getElementById("ice-cream-list");
const cartBtn = document.getElementById("cart-logo");
const cartList = document.getElementById("cart-list");
const inputbox = document.getElementById("input-box");
const subitBtn = document.getElementById("subit-btn");
const purchaseBtn = document.getElementById("purchase-btn");

let userAmount = 0;

subitBtn.addEventListener("click", () => {
    if (inputbox.value == '' ) {
        alert("Please Enter Ammount You have to Purchase Ice-cream!")
    } else {
        userAmount = inputbox.value;
    }
})
 
let isCart = false;
cartBtn.addEventListener("click", () => {
    const cartPopUp = document.getElementById("cart-pop-up");
    if (!isCart) {
        cartPopUp.style.display = "grid";
        isCart = true;
    } else {
        cartPopUp.style.display = "none";
        isCart = false;
    }
})

function createCard(data) {  //create ice cream card 
    let flavors = '';
    for (let i = 0; i < data.flavors.length; i++) {
        flavors += `<span class="flavours btn">${data.flavors[i]}</span>`;
    }
    const cardData = `<div class="ice-cream-details">
                    <div class="ice-cream-image" style="background-image: url(images/${data.image});"></div>
                    <div class="description">
                        <div class="ice-cream-name">${data.name}</div>
                        <div class="ice-cream-description">${data.description}</div>
                        <div class="ice-cream-flavours">
                            ${flavors}
                        </div>
                    </div>
                    </div>
                    <div class="card-cta">
                        <span class="price">${data.price} $</span>
                        <button class="btn btn-primary add-cart-btn">Add to Cart</button>
                    </div>`
    let card = document.createElement("li");
    card.setAttribute("class", "ice-cream-card");
    card.innerHTML = cardData;
    return card;
}

function createCartCard(data) {
    const cartData = `<div class="cart-details">
                        <div class="cart-image" style="background-image: url(images/${data.image});"></div>
                        <div class="cart-description">
                            <div class="cart-name">${data.name}</div>
                            <div class="description">${data.description}</div>
                        </div>
                        </div>
                        <div class="cart-cta">
                            <div>
                                <span class="cart-price">${data.price} </span>
                                <input class="quantity" min="1" max="5" value="1" type="number">
                            </div>
                            <i class="fa-solid fa-trash cart-card-remove"></i>
                        </div>`;
    const cartCard = document.createElement("li");
    cartCard.setAttribute("class", "cart-card");
    cartCard.innerHTML = cartData;
    return cartCard;
}

for (let i = 0; i < iceCreamData.length; i++) {
    iceCreamList.append(createCard(iceCreamData[i]));
}

let cartPrice;
let quantity;
let cartCartRemove;
let cartCardList;
let totalPrice;
let isCartHaveItems = false;

const addToCartBtn = document.getElementsByClassName("add-cart-btn");
const cartQuantity = document.getElementById("cart-quantity");
const cartMessage = document.getElementById("cart-message");
const totalAmount = document.getElementById("total-amount");

for (let i = 0; i < addToCartBtn.length; i++) {
    addToCartBtn[i].addEventListener("click", () => {
        addToCart(i);
        isCartHaveItems = true;
        removeCartCard();
        updateTotalPrice();
        cartCardQuantity();
        purchaseBtn.disabled = false;
    })
}

function addToCart(i) {
    cartMessage.style.display = "none";
    cartList.prepend(createCartCard(iceCreamData[i]));
    cartQuantity.textContent = cartList.childElementCount;  // Cart Quantity
    
}

function removeCartCard() {
    cartCartRemove = document.querySelectorAll(".cart-card-remove");
    cartCardList = document.querySelectorAll(".cart-card");
    // console.log(cartCardList, cartCartRemove)
    for (let i = 0; i < cartCartRemove.length; i++) {
        cartCartRemove[i].addEventListener("click", () => {
            // cartList.removeChild(cartCardList[i]);
            let removePrice = cartCardList[i].children[1].children[0];
            console.log(removePrice)
            cartCardList[i].remove();
            cartQuantity.textContent = cartList.childElementCount;      // Cart Quantity
        })
    }
}
function updateTotalPrice(removePrice) {
    totalPrice = 0;
    cartPrice = document.getElementsByClassName("cart-price");
    quantity = document.getElementsByClassName("quantity");

    for (let i = 0; i < cartPrice.length; i++) {
        totalPrice += Number(cartPrice[i].textContent) * quantity[i].value;
        totalAmount.textContent = totalPrice + " $";
    }
}

function cartCardQuantity() {
    for (let i = 0; i < quantity.length; i++) {
        quantity[i].addEventListener("input", () => {
            updateTotalPrice()
        });
    }
}


purchaseBtn.addEventListener("click", () => {
    checkFunds(userAmount, totalPrice)
        .then((result) => {
            alert(result)
            purchased();
        })
        .catch((error) => {
            alert(error)
        });
})


function checkFunds(userAmount, totalPrice) {
    return new Promise((resolve, reject) => {
        if (userAmount >= totalPrice) {
            resolve("Purchase Sucessful. Sufficinet funds available.")
        } else {
            reject("Purchase Failed. Insufficient Funds.")

        }
    })
}

function purchased() {
    cartList.innerHTML = '';
    totalPrice = 0;
    totalAmount.textContent = 0;
    purchaseBtn.disabled = true;
    inputbox.value = '';
    cartQuantity.textContent = 0;
    userAmount = 0;
}