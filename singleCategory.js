


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

        const divBtnProduct = document.createElement("div");
        divBtnProduct.id = `div-btn-product`;

        //view product
        const viewProductBtn = document.createElement("button");
        viewProductBtn.id = 'view-product';
        viewProductBtn.textContent = `view`;
        viewProductBtn.setAttribute("data-id", item.id);

        //delete product
        const deleteProductBtn = document.createElement("button");
        deleteProductBtn.id = 'delete-product';
        deleteProductBtn.textContent = `delete`;
        deleteProductBtn.setAttribute("data-id", item.id);

        //update product
        const updateProductBtn = document.createElement("button");
        updateProductBtn.id = `update-product`;
        updateProductBtn.textContent = `update`;
        updateProductBtn.setAttribute("data-id", item.id);

        divBtnProduct.appendChild(viewProductBtn);
        divBtnProduct.appendChild(deleteProductBtn);
        divBtnProduct.appendChild(updateProductBtn);

        card.appendChild(img);
        card.appendChild(titleCard);
        card.appendChild(Price);
        card.appendChild(description);
        card.appendChild(divBtnProduct);

        singleCategoryDisplay.appendChild(card);

    })
}

