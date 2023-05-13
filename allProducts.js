

// get single category

// display all category products

async function displayProducts(e) {
let allCategory = document.querySelector("#all-category");
let displayCategoryProducts = document.querySelector("#displayCategoryProducts")
    console.log(products);

    const id = +e.target.dataset.id;
    products = await getCategoryProducts(id);
    console.log(products);

    createProducts();

    allCategory.style.display = 'none';
    displayCategoryProducts.style.display = 'block';
}



//grid single category
const createProducts = () => {
    let allCategoryProducts = document.querySelector(".allCategoryProducts");
    products.forEach(item => {

        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.setAttribute("src", item.images);
        img.id = 'product-id';
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






