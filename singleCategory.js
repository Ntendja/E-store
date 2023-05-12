


// display single category
async function displaySingleCategory(e) {
    let allCategory = document.querySelector("#all-category");
    let displayCategory = document.querySelector("#display-category");

    let addNewCategory = document.querySelector("#new-category");
    let addNewProduct = document.querySelector("#new-product");


    const id = +e.target.dataset.id;
    singleCategory = await getSingleCategory(id);

    console.log(singleCategory);
    createSingleCategory();
    allCategory.style.display = 'none';
    displayCategory.style.display = 'block';

    addNewCategory.style.display = 'none';
    addNewProduct.style.display = 'block';

}


//grid single category
const createSingleCategory = () => {
    let singleCategoryDisplay = document.querySelector(".single-category");
    singleCategory.forEach(item => {

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

        singleCategoryDisplay.appendChild(card);

    })
}

