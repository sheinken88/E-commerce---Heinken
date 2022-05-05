const addProduct = document.getElementsByClassName("add-product");
console.log(addProduct);

for (let i = 0; i < addProduct.length; i++) {
    let button = addProduct[i]
    button.addEventListener("click", function() {
        console.log("button clicked");
    })
}
