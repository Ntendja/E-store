let currentProduct = null;
// view product of DOM
async function viewProduct(e) {
    let productID = +e.target.dataset.id;
    let product = products.find(item => item.id === productID);
    currentProduct = product;
    console.log(product);

    categoryDiv.style.display = 'none';
    displayCategoryProducts.style.display = 'none';
    productSection.style.display = 'grid';
createProduct(product);
}



// create product

const createProduct = (item) => {
    let productSection = document.querySelector("#productSection");

    const divImage = document.createElement("div");
    const image = document.createElement("img");
    image.setAttribute("src", item.images);
    image.id = 'product-img';

    const productDetail = document.createElement("div");
    productDetail.id = 'product-details';

    const title = document.createElement("h1");
    title.textContent = item.title;
    title.id = 'productTitle';
   // title.textContent = item.title.length > 18 ? `${item.title.substring(0, 18)} ...more` : item.title;

    const price = document.createElement("p");
    price.textContent = `$ ${item.price}`;
    price.id = 'productPrice';

    const description = document.createElement("p");
    description.textContent = item.description;
    description.id = 'productDescription';
   // description.textContent = item.description.length > 80 ? `${item.description.substring(0, 80)} ...more` : item.description;

    const category = document.createElement("p");
    category.textContent = `Category: ${item.category.name}`;
    category.id = 'productCategory';

    const addToCartBtn = document.createElement("button");
    addToCartBtn.id = 'addToCart';
    addToCartBtn.textContent = `add to Cart` ;
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