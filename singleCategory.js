let singleCategory = [];

// get single category
async function getSingleCategory(categoryID) {
    const response = await fetch(`${fetchUrl}/categories/${categoryID}/products`)
    return await response.json();
}

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

//section display products with js



async function viewProduct(e) {
    let allCategory = document.querySelector("#all-category");
    let productSection = document.querySelector("#product-section");

    let id = +e.target.dataset.id;
    singleCategory = await getSingleCategory(id);

    console.log(singleCategory);
    createProduct();

    allCategory.style.display = 'none';
    productSection.style.display = 'block';
}

const createProduct = () => {
    let productSection = document.querySelector("#product-section");

    singleCategory.forEach(item =>{

        const divImage = document.createElement("div");
        const image = document.createElement("img");
        image.setAttribute("src", item.images);
        image.id = 'product-img';

        const productDetail = document.createElement("div");
        productDetail.id = 'product-details';

        const title = document.createElement("h1");
        title.textContent = item.title.length > 18 ? `${item.title.substring(0, 18)} ...more` : item.title;

       // title.textContent = item.title;
      //  title.length > 18 ? title.substring(0, 18).concat(' ...more') : title;

        const price = document.createElement("p");
        price.textContent = `$ ${item.price}`;

        const description = document.createElement("p");
        description.textContent = item.description.length > 80 ? `${item.description.substring(0, 80)} ...more` : item.description;

      //  description.textContent = item.description;
       // description.length > 80 ? description.substring(0, 80).concat(' ...more') : description;

        const category = document.createElement("p");
        category.textContent = `Category: ${item.category.name}`;

      //  category.textContent = `$ {Category: item.category.name}`;


        divImage.appendChild(image);

        productDetail.appendChild(title);
        productDetail.appendChild(price);
        productDetail.appendChild(description);
        productDetail.appendChild(category);

        productSection.appendChild(divImage);
        productSection.appendChild(productDetail);



    })


}