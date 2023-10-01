let currentProduct = null;

// view product of DOM
async function viewProduct(e) {
    let productID = +e.target.dataset.id;
    let product = products.find(item => item.id === productID);
    currentProduct = product;
    categoryDiv.innerHTML = "";
    displayCategoryProducts.innerHTML = "";

    productSection.style.display = 'grid';
createProduct(product);

}



// create product

const createProduct = (item) => {
    let productSection = document.querySelector(".productSection");

    const divImage = document.createElement("div");
    const image = document.createElement("img");
    image.setAttribute("src", item.images[0]);
    image.classList.add("product-img");

    const productDetail = document.createElement("div");
    productDetail.classList.add("product-details");


    const title = document.createElement("h1");
    title.textContent = item.title;
    title.classList.add("productTitle");

    // title.textContent = item.title.length > 18 ? `${item.title.substring(0, 18)} ...more` : item.title;

    const price = document.createElement("p");
    price.textContent = `$ ${item.price}`;
    price.classList.add("productPrice");

    const description = document.createElement("p");
    description.textContent = item.description;
    description.classList.add("productDescription");

    // description.textContent = item.description.length > 80 ? `${item.description.substring(0, 80)} ...more` : item.description;

    const category = document.createElement("p");
    category.textContent = `Category: ${item.category.name}`;
    category.classList.add("productCategory");


    const addToCartBtn = document.createElement("button");
    addToCartBtn.classList.add("addToCart");

    addToCartBtn.textContent = `add to Cart` ;
    // addToCartBtn.addEventListener("click", addToCart);
    addToCartBtn.addEventListener("click", addToCart);

    divImage.appendChild(image);
    productDetail.appendChild(title);
    productDetail.appendChild(price);
    productDetail.appendChild(description);
    productDetail.appendChild(category);
    productDetail.appendChild(addToCartBtn);

    productSection.appendChild(divImage);
    productSection.appendChild(productDetail);

}