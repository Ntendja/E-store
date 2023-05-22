
let currentFilteredProduct = null;

let filteredProductGrid = document.querySelector(".filteredProductGrid");



async function viewFilteredProduct(e) {
    let filteredProductID = +e.target.dataset.id;
    let filteredProduct = filter.find(item => item.id === filteredProductID);
    currentFilteredProduct = filteredProduct;
    console.log("productFiltered after",filteredProduct);

    // categoryDiv.style.display = 'none';
    // displayCategoryProducts.style.display = 'none';
    // categoryDiv.innerHTML = "";
    // displayCategoryProducts.innerHTML = "";
    //
    // productSection.style.display = 'grid';
    mainPage.innerHTML = "";
    filterDiv.innerHTML = "";
    filteredProductGrid.style.display = 'grid';

    createFilteredProduct(filteredProduct);

}

const createFilteredProduct = (item) => {
    let filteredProductGrid = document.querySelector(".filteredProductGrid");

    let divImage = document.createElement("div");
    let image = document.createElement("img");
    image.setAttribute("src", item.images[0]);
    image.classList.add("product-img");
    // image.id = 'product-img';

    let productDetail = document.createElement("div");
    // productDetail.id = 'product-details';
    productDetail.classList.add("product-details");


    let title = document.createElement("h1");
    title.textContent = item.title;
    // title.id = 'productTitle';
    title.classList.add("productTitle");

    // title.textContent = item.title.length > 18 ? `${item.title.substring(0, 18)} ...more` : item.title;

    let price = document.createElement("p");
    price.textContent = `$ ${item.price}`;
    // price.id = 'productPrice';
    price.classList.add("productPrice");

    let description = document.createElement("p");
    description.textContent = item.description;
    // description.id = 'productDescription';
    description.classList.add("productDescription");

    // description.textContent = item.description.length > 80 ? `${item.description.substring(0, 80)} ...more` : item.description;

    let category = document.createElement("p");
    category.textContent = `Category: ${item.category.name}`;
    // category.id = 'productCategory';
    category.classList.add("productCategory");


    let addToCartBtn = document.createElement("button");

    addToCartBtn.classList.add("addToCart");
    addToCartBtn.textContent = `add to Cart` ;
    addToCartBtn.addEventListener("click", addToCart);

    divImage.appendChild(image);
    productDetail.appendChild(title);
    productDetail.appendChild(price);
    productDetail.appendChild(description);
    productDetail.appendChild(category);
    productDetail.appendChild(addToCartBtn);

    filteredProductGrid.appendChild(divImage);
    filteredProductGrid.appendChild(productDetail);

}