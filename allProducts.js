// display all category products
async function displayProducts(e) {

    categoryDiv.innerHTML = "";
    const id = +e.target.dataset.id;
    products = await getCategoryProducts(id);
    createProductsByCategory();
    // categoryDiv.style.display = 'none';
    displayCategoryProducts.style.display = 'block';



    // mainPage.appendChild(displayCategoryProducts);
}


//grid single category
const createProductsByCategory = () => {
    let allCategoryProducts = document.querySelector(".allCategoryProducts");

    products.forEach(item => {

        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.setAttribute("src", item.images);
        // img.id = 'product-id';
        img.setAttribute("data-id", item.id);
        img.addEventListener("click", viewProduct);

        const titleCard = document.createElement("h3");
        titleCard.textContent = item.title;

        const Price = document.createElement("p");
        Price.textContent = `$ ${item.price}`;

        card.appendChild(img);
        card.appendChild(titleCard);
        card.appendChild(Price);

        allCategoryProducts.appendChild(card);

    })
}






