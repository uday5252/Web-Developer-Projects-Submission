// const apiUrl = `https://api.escuelajs.co/api/v1/products`
const apiUrl = `https://fakestoreapi.com/products/`

const categoryList = document.getElementById("category-list")
const topDealsContainer = document.getElementById("top-deals-card-container")
const bestSellingContainer = document.getElementById("best-selling-card-container")
const bestElectronicsContainer = document.getElementById("best-mobiles-card-container")

async function fetchData(value = '') {
    const responce = await fetch(apiUrl + value)
    const data = await responce.json()
    // addToCart()
    return data
}

// async function category(result) {
//     const data = await result
//     data.forEach((i) => {
//         const category = document.createElement("li")
//         category.setAttribute("class", "cta")
//         category.innerHTML = `<a class="category">${i}</a>`
//         categoryList.append(category)
//     })
// }

// category(fetchData("categories"))

function thumbnail(data) {
    const title = data.title.split(" ").slice(1, 4).join(" ")
    const thumbnail = document.createElement("div")
    thumbnail.setAttribute("class", "thumbnail-card")
    const thumbnaiData = `<div class="thumbnail" style="background-image: url(${data.image});"></div>
                            <div class="thumbnail-tittle">${title}</div>
                            <div class="thumbnail-cta">
                                <div class="thumbnail-price">${data.price} $</div>
                                <button class="btn product-cart-btn">Add to Cart</button>
                            </div>`
    thumbnail.innerHTML = thumbnaiData
    return thumbnail
}

async function topDeals(result) {
    const data = await result
    for (let i = 0; i < 6; i++) {
        topDealsContainer.append(thumbnail(data[i]))
    }
    
}

topDeals(fetchData("?sort=desc"))

async function bestSelling(result) {
    const data = await result
    data.forEach((dataArr) => {
        bestSellingContainer.append(thumbnail(dataArr))
    })
}
bestSelling(fetchData("?limit=6"))

async function bestElectronics(result) {
    const data = await result
    data.forEach((dataArr) => {
        bestElectronicsContainer.append(thumbnail(dataArr))
    })
}

bestElectronics(fetchData("category/electronics"))

const days = document.getElementsByClassName("days")
const hours = document.getElementsByClassName("hours")
const min = document.getElementsByClassName("min")
const sec = document.getElementsByClassName("sec")
const upcommingDate = new Date("01-10-2024")
const inetrval = setInterval(countDown, 1000)

function countDown() {
    const currentDate = new Date
    const remainingTime = upcommingDate.getTime() - currentDate.getTime() 
    if(remainingTime <= 0) {
        clearInterval(inetrval)
        document.getElementById("event-timmer").textContent = "Event has Ended!"
    } else {
        for (let i = 0; i < days.length; i++) {
            days[i].textContent = Math.floor(remainingTime / (1000 * 60 * 60 * 24)) 
            hours[i].textContent =  Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            min[i].textContent = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60))
            sec[i].textContent = Math.floor((remainingTime % (1000 * 60)) / 1000)
        }
    }
}
 //ani-card-num-active
const cardNum = document.getElementsByClassName("card-num")
for (let i = 0; i < cardNum.length; i++) {
    cardNum[i].classList.remove("ani-card-num-active")
}

function productTemplate(data) {
    const template = document.createElement("div")
    template.setAttribute("class", "product-template")
    const starRating = Math.round(data.rating.rate)
    template.innerHTML = `<i class="fa-solid fa-heart wishlist"></i>
                            <img src="${data.image}" class="product-image" alt="${data.title}"></img>
                            <div class="product-tittle">
                                ${data.title}
                            </div>
                            <div class="product-ratting">
                                ${rating(starRating)}
                            </div>
                            <div class="product-cta">
                                <div class="product-price">${data.price} $</div>
                                <button class="btn product-cart-btn">Add to Cart</button>
                            </div>`
    return template
}

function rating(rate) {
    let starHTML = ``
    for(let i = 1; i <= 5; i++) {
        const starClass = i <= rate ? "fa-solid" : "fa-regular"
        starHTML += `<i class="${starClass} fa-star star"></i>`
    }
    return starHTML
}

const productsContainer = document.getElementById("products-container")

async function products(result) {
    const data = await result
    toggleContainer.style.display = "none"
    productsContainer.style.display = "grid"
    productsContainer.innerHTML = ''
    data.forEach((i) => {
        productsContainer.append(productTemplate(i))
    })
    wishlist(document.getElementsByClassName("wishlist"))

} 
// products(fetchData("electronics"))

const categories = document.getElementsByClassName("category")
const toggleContainer = document.getElementById("toggle-container")
const productscontainer = document.getElementById("products-container")
let isProductsVisible = false
for (let i = 0; i < categories.length; i++) {
    categories[i].addEventListener("click", () => {
        if (!isProductsVisible) {
            if (categories[i].getAttribute("data") == "") {
                products(fetchData())
            } else {
                products(fetchData("category/" + categories[i].getAttribute("data")))
            }
        } else {

        }
        const timeoutId = setTimeout(addToCart, 5000)
    }) 
}

function wishlist(data) {
    $(document).ready(() => {
        let isWishlished = false
        $(".wishlist").click(function() {
            if (!isWishlished) {
                $(this).css("color", "red")
                isWishlished = true
                const parent = $(this).parent() 
                const productTittle = parent[0].children[2].textContent
                const productPrice = parent[0].children[4].children[0].textContent
                localStorage.setItem("Product Tittle", productTittle)
                localStorage.setItem("Product Price", productPrice)
            } else {
                $(this).css("color", "rgba(64, 64, 64, 0.3)")
                isWishlished = false
            }
            
        })
    })

}

$(document).ready(function() {
    $("#top-deals-cta").click(() => products(fetchData("?sort=desc")))
    $("#best-selling-cta").click(() => products(fetchData()))
    $("#best-mobiles-cta").click(() => products(fetchData("category/electronics")))
    $("#wishlist-icon").click(() => $("#wishlist-container").toggle())
    $("#cart-icon").click(() => $("#cart-container").toggle())
    $("#search-button").click(function() {
        const inputValue = $("#input-box").val()
        if(inputValue == '') {
            alert("Please enter value!")
        } else {
            products(fetchData())
            $("#input-box").val('')
            const timeoutId = setTimeout(addToCart, 5000)
        }
    })
})
const timeoutId = setTimeout(addToCart, 5000)
async function addToCart() {
    $(document).ready(function() {
        clearTimeout(timeoutId)
        const addToCartBtn = $(".product-cart-btn")
        const cartContainer = $("#cart-container")
        addToCartBtn.click(function() {
            const textArr = $(this).parent().parent()[0].innerText.split("\n")
            const cartName = textArr[0]
            const cartPrice = textArr[1]
            cartContainer.append(cartCard(cartName, cartPrice))
            $("#cart-count").text(cartContainer.children().length)
        })
    })
}
function cartCard(name, price) {
    const productListCart = document.createElement("li")
    productListCart.setAttribute("class", "product-list")
    productListCart.innerHTML = `<div class="product-list-tittle">${name}</div>
                                <div class="product-list-price">${price}</div>`
    return productListCart
}