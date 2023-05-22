const fetchUrl = "https://api.escuelajs.co/api/v1";

let allCategory = [];
let products = [];

let categoryDiv = document.querySelector("#categoryDiv");
let displayCategoryProducts = document.querySelector("#displayCategoryProducts");
let productSection = document.querySelector(".productSection");
const mainPage = document.querySelector(".mainPage");


// get all category
async function getCategory() {
    const response = await fetch(`${fetchUrl}/categories`)
    return await response.json();
}

//get products by category
async function getCategoryProducts(categoryID) {
    const response = await fetch(`${fetchUrl}/categories/${categoryID}/products`)
    return await response.json();
}


// display category card
async function displayAllCategory() {
    allCategory = await getCategory();
    console.log(allCategory);
    createCategoryCard();
}

displayAllCategory();


// create category card
const createCategoryCard = () => {

    let categoryCard = document.querySelector(".categoryDisplay");

    allCategory.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.setAttribute("src", item.image);
        img.id = 'category-id';
        img.setAttribute("data-id", item.id);
        img.addEventListener("click", displayProducts);

        const h3 = document.createElement("h3");
        h3.textContent = item.name;

        card.appendChild(img);
        card.appendChild(h3);

        categoryCard.appendChild(card);

    })
}



