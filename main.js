const fetchUrl = "https://api.escuelajs.co/api/v1";

// save all category in array
let allCategory = [];
let singleCategory = [];

// get all category
async function getCategory() {
    const response = await fetch(`${fetchUrl}/categories`)
    return await response.json();
}


// get single category
async function getSingleCategory(categoryID) {
    const response = await fetch(`${fetchUrl}/categories/${categoryID}/products`)
    return await response.json();
}


// display category card
async function displayAllCategory() {
    allCategory = await getCategory();

   // console.log(allCategory);
    createCategoryCard();
}
displayAllCategory();


// display single category
async function displaySingleCategory(e) {
    let allCategory = document.querySelector("#all-category");
    let displayCategory = document.querySelector("#display-category");

    const id = +e.target.dataset.id;
    singleCategory = await getSingleCategory(id);

    console.log(singleCategory);
    createSingleCategory();
    allCategory.style.display = 'none';
    displayCategory.style.display = 'block';

}

// function delete category

function deleteCategory(e){
    e.target.parentElement.parentElement.remove();
    console.log(allCategory);

}


// create category card
const createCategoryCard = () => {

    let categoryCard = document.querySelector(".cardDisplay");

    allCategory.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.setAttribute("src", item.image);
        img.setAttribute("alt", item.name);

        const h3 = document.createElement("h3");
        h3.textContent = item.name;

        const divBtn = document.createElement("div");
        divBtn.classList.add("div-btn-category");
        // btn view category
        const btnCategoryView = document.createElement("button");
        btnCategoryView.id = 'view-category';
        btnCategoryView.textContent = `view`;
        btnCategoryView.setAttribute("data-id", item.id);
        btnCategoryView.addEventListener("click", displaySingleCategory);

// btn delete category
        const btnCategoryDelete = document.createElement("button");
        btnCategoryDelete.id = 'view-delete';
        btnCategoryDelete.textContent = `delete`;
        btnCategoryDelete.setAttribute("data-id", item.id);
       btnCategoryDelete.addEventListener("click", deleteCategory);

        // update category
        const btnCategoryUpdate = document.createElement("button");
        btnCategoryUpdate.id = 'view-update';
        btnCategoryUpdate.textContent = `update`;
        btnCategoryUpdate.setAttribute("data-id", item.id);
      //  btnCategoryUpdate.addEventListener("click", updateCategory);



        divBtn.appendChild(btnCategoryView);
        divBtn.appendChild(btnCategoryDelete);
        divBtn.appendChild(btnCategoryUpdate);


        card.appendChild(img);
        card.appendChild(h3);
        card.appendChild(divBtn);

        categoryCard.appendChild(card);

    })
}

//grid single category
const createSingleCategory = () => {
    let singleCategoryDisplay = document.querySelector(".single-category");
    singleCategory.forEach(item => {

        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.setAttribute("src", item.images);

        const titleCard = document.createElement("h3");
        titleCard.textContent = item.title;

        const Price = document.createElement("p");
        Price.textContent = item.price;

        const description = document.createElement("p");
        description.textContent = item.description;

        const btnProduct = document.createElement("button");
        btnProduct.id = 'view-product';
        btnProduct.textContent = `view`;
        btnProduct.setAttribute("data-id", item.id);
        //btnProduct.addEventListener("click", viewProduct);

        card.appendChild(img);
        card.appendChild(titleCard);
        card.appendChild(Price);
        card.appendChild(description);
        card.appendChild(btnProduct);

        singleCategoryDisplay.appendChild(card);

    })
}
