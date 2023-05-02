let singleProduct = [];


async function getSingleProduct(productID) {
    const response = await fetch(`${fetchUrl}/categories/products/${productID}`)
    return await response.json();
}

async function viewProduct(e) {
    let allCategory = document.querySelector("#all-category");
    let addNewCategory = document.querySelector("#new-category");
    let addNewProduct = document.querySelector("#new-product");
    let productSection = document.querySelector("#product-section");

    let id = +e.target.dataset.id;
    singleProduct = await getSingleProduct(id);

    console.log(singleProduct);
    createProduct();

    allCategory.style.display = 'none';
    addNewCategory.style.display = 'none';
    addNewProduct.style.display = 'block';
    productSection.style.display = 'block';
}

const createProduct = () => {
    let productSection = document.querySelector("#product-section");

    singleProduct.forEach(item =>{

        const divImage = document.createElement("div");
        const image = document.createElement("img");
        image.setAttribute("src", item.images);
        image.id = 'product-img';

        const productDetail = document.createElement("div");
        productDetail.id = 'product-details';

        const title = document.createElement("h1");
        title.textContent = item.title;
        title.length > 18 ? title.substring(0, 18).concat(' ...more') : title;

        const price = document.createElement("p");
        price.textContent = `$ ${item.price}`;

        const description = document.createElement("p");
        description.textContent = item.description;
        description.length > 80 ? description.substring(0, 80).concat(' ...more') : description;

        const category = document.createElement("p");
        category.textContent = `$ {Category: item.category.name}`;


        divImage.appendChild(image);

        productDetail.appendChild(title);
        productDetail.appendChild(price);
        productDetail.appendChild(description);
        productDetail.appendChild(category);

        productSection.appendChild(divImage);
        productSection.appendChild(productDetail);



    })


}