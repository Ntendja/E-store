let viewCart = document.querySelector(".viewCart");
let toCartBtn = document.querySelector("#cartBtn");
let getProductFromLocalstorage = JSON.parse(localStorage.getItem("waren"));
let totalProduct = [];

toCartBtn.addEventListener("click", displayCart);

//display cart page
function displayCart() {
    mainPage.style.display = 'none';
    filterDiv.style.display = 'none';
    viewCart.style.display = 'block';
    createTableCart();
    getTotalProductCost();
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

const createTableCart = (item) => {
    let tableCart = document.querySelector("#tableCart");
    let tableBody = document.querySelector("#tableCartBody");

    getProductFromLocalstorage.forEach(item => {
        const tableRow = document.createElement("tr");
        const td_title = document.createElement("td");
        td_title.textContent = item.title;
        const td_img = document.createElement(("td"));
        const img = document.createElement("img");
        img.addEventListener("click", viewProduct);
        img.src = item.images[0];
        img.style.width = '60px';
        img.style.height = '60px';

        td_img.appendChild(img);

        const td_category = document.createElement("td");
        td_category.textContent = item.category.name;

        const td_price = document.createElement("td");
        td_price.textContent = item.price;

        const td_btnDelete = document.createElement("td");
        const iconDelete = document.createElement("i");
        iconDelete.classList.add("fa", "fa-trash");
        iconDelete.style.color = 'red';
        iconDelete.setAttribute("data-id", item.id);
         iconDelete.addEventListener("click", deleteProduct);

        td_btnDelete.appendChild(iconDelete);

        tableRow.appendChild(td_title);
        tableRow.appendChild(td_img);
        tableRow.appendChild(td_category);
        tableRow.appendChild(td_price);
        tableRow.appendChild(td_btnDelete);
        // tableCart.innerHTML += tableRow.join("");
        tableBody.prepend(tableRow);
    })

}


//btn delete
function deleteProduct(e) {
    let id = +e.target.dataset.id;
    getProductFromLocalstorage = getProductFromLocalstorage.filter(item => item.id !== id);
    localStorage.setItem("waren", JSON.stringify(getProductFromLocalstorage));
    displayCart();
}

// //delete product in localstorage
//
// function deleteProductInLocaleStorage(id) {
//     if(getProductFromLocalstorage) {
//         getProductFromLocalstorage = getProductFromLocalstorage.filter(item => item.id != id);
//         localStorage.setItem('waren'. JSON.stringify(getProductFromLocalstorage));
//
//     }
// }
// deleteProductInLocaleStorage();



// total products cost

function getTotalProductCost() {
    return totalProduct.reduce((acc, item) => {
        acc += +item.value;
return acc;
    }, 0);

}







