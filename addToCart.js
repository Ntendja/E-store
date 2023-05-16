let viewCart = document.querySelector(".viewCart");
//let addToCartBtn = document.querySelector("#addToCart");
let toCartBtn = document.querySelector("#cartBtn");

// console.log("viewCart");
// console.log("addToCartBtn");
// console.log("toCart");

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

function saveProductsToLocalStorage(product) {
    let products = JSON.parse(localStorage.getItem("waren"));
    if(products && Array.isArray(products) && products.length > 0){
              products.push(product)
    }else{
        products = [product];
    }
    localStorage.setItem("waren", JSON.stringify(products));
}

//Cart page with product von localstorage

const getProductToLocalstorage = JSON.parse(localStorage.getItem("waren"));
if (getProductToLocalstorage !== null) {
    const nodes = getProductToLocalstorage.map(item => {
        return `
        <tr>
                    <td>${item.title}</td>
                    <td><img src="${item.images[0]}" alt="${item.name}" width="60px" height="60px"></td>
                    <td>${item.category.name}</td>
                    <td>${1}</td>
                    <td>${item.price}€</td>
                     <td><i class="fa fa-trash" style="color: red" class = " deleteProduct"></i></td>

                </tr>
        `
    });
    let tableCart = document.getElementById("tableCart");
    tableCart.innerHTML += nodes.join("");
}

