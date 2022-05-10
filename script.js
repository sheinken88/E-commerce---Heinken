// const addToCart = document.getElementsByClassName("add-to-cart");
// console.log(addToCart);

// for (let i = 0; i < addToCart.length; i++) {
//     let button = addToCart[i]
//     button.addEventListener("click", function() {
//         console.log("button clicked");
//     })
// }

// let addToCartButtons = document.getElementsByClassName("add-to-cart")
// for (let i = 0; i < addToCartButtons.length; i++) {
//     let button = addToCartButton [i]
//     button.addEventListner("click", addToCartClicked)
// }

// function addToCartClicked(event) {
//     let button = event.target
// }

let carts = document.querySelectorAll(".product-img");

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener("click", () => {
        cartNumbers();
    })
}

function cartNumbers() {
    let productNumbers = localStorage.getItem("cartNumbers");
    console.log(productNumbers);
    console.log(typeof productNumbers);

    productNumbers = parseInt(productNumbers);
    console.log(typeof productNumbers);
    localStorage.setItem("cartNumbers", 1);

}