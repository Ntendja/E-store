let allProducts;
let allProductDiv = document.querySelector(".allProduct");
let showAllProduct = document.querySelector('#showAllProduct');
showAllProduct.addEventListener('click', displayAllProducts);

async function getAllProducts() {
    const response = await fetch(`${fetchUrl}/products`)
    return await response.json();
}


async function displayAllProducts() {

    allProducts = await getAllProducts();
    console.log(allProducts);
    mainPage.innerHTML= "";
    filterDiv.innerHTML= "";
    allProductDiv.style.display = 'grid';
    createAllProductGrid();
}



const createAllProductGrid = () => {

    allProducts.forEach(item => {
        const allProductCard = document.createElement("div");
        allProductCard.classList.add("card");

        const imgProduct = document.createElement("img");
        imgProduct.setAttribute("src", item.images[0]);
        imgProduct.setAttribute("data-id", item.id);
        imgProduct.addEventListener("click", viewProduct);

        const titleCard = document.createElement("h3");
        titleCard.textContent = item.title;

        const Price = document.createElement("p");
        Price.textContent = `$ ${item.price}`;

        // let category = document.createElement("p");
        // category.textContent = `Category: ${item.category.name}`;
        // // category.classList.add("");

        allProductCard.appendChild(imgProduct);
        allProductCard.appendChild(titleCard);
        allProductCard.appendChild(Price);

        allProductDiv.appendChild(allProductCard);

    })
}


