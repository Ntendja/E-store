let viewCart = document.querySelector(".viewCart");
let toCartBtn = document.querySelector("#cartBtn");

toCartBtn.addEventListener("click", displayCart);

//display cart page
function displayCart() {
    mainPage.style.display = 'none';
    filterDiv.style.display = 'none';
    viewCart.style.display = 'block';
}

//add product in cart
function addToCart() {
    console.log(currentProduct);
    saveProductsToLocalStorage(currentProduct);
}

//save products to localstorage
function saveProductsToLocalStorage(product) {
    let products = JSON.parse(localStorage.getItem("waren"));
    if(products && Array.isArray(products) && products.length > 0){
              products.push(product)
    }else{
        products = [product];
    }
    localStorage.setItem("waren", JSON.stringify(products));
}


//Cart page with product from localstorage
const getProductFromLocalstorage = JSON.parse(localStorage.getItem("waren"));
if (getProductFromLocalstorage !== null) {
    const nodes = getProductFromLocalstorage.map(item => {

        return `
        <tr>
                    <td>${item.title}</td>
                    <td><img src="${item.images[0]}" alt="${item.title}" width="60px" height="60px"></td>
                    <td>${item.category.name}</td>
                    <td>${item.price}€</td>
                     <td><i class="fa fa-trash" style="color: red" onclick="deleteProduct('${item.title}')"></i></td>

        </tr>
        `
    });
    let tableCart = document.getElementById("tableCart");
    tableCart.innerHTML += nodes.join("");
}


















// //delete product in Cart page
// function deleteProduct(item) {
//     removeProduct(item);
// }
//
// //delete array product in localstorage
// function removeProduct(title) {
//     let warenkorb = JSON.parse(localStorage.getItem("waren"))
//
//     if (warenkorb) {
//         warenkorb = warenkorb.filter(item => item.title != title);
//         localStorage.setItem('waren', JSON.stringify(warenkorb));
//     }
// }
