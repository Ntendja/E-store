// get single category

// view product of DOM

async function viewProduct(e) {
    let allCategory = document.querySelector("#all-category");
    let productSection = document.querySelector("#product-section");

    let id = +e.target.dataset.id;
    products = await getCategoryProducts(id);
    console.log(id);
    mainPage.innerHTML = "";

    let product = products.find(item => item.id === id);


    if (product) {
        allCategory.style.display = 'none';
        productSection.style.display = 'block';
        console.log(product);
        createProduct();
    } else {
        console.log("Product not found");
    }
}


// create product

const createProduct = () => {
    let productSection = document.querySelector("#product-section");


    products.forEach(item => {
        const divImage = document.createElement("div");
        const image = document.createElement("img");
        image.setAttribute("src", item.images);
        image.id = 'product-img';

        const productDetail = document.createElement("div");
        productDetail.id = 'product-details';

        const title = document.createElement("h1");
        title.textContent = item.title.length > 18 ? `${item.title.substring(0, 18)} ...more` : item.title;

        const price = document.createElement("p");
        price.textContent = `$ ${item.price}`;

        const description = document.createElement("p");
        description.textContent = item.description.length > 80 ? `${item.description.substring(0, 80)} ...more` : item.description;

        const category = document.createElement("p");
        category.textContent = `Category: ${item.category.name}`;

        divImage.appendChild(image);
        productDetail.appendChild(title);
        productDetail.appendChild(price);
        productDetail.appendChild(description);
        productDetail.appendChild(category);

        productSection.appendChild(divImage);
        productSection.appendChild(productDetail);
    });
}