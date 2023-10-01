let currentFilteredProduct = null;

let filteredProductGrid = document.querySelector(".filteredProductGrid");


async function viewFilteredProduct(e) {
    let filteredProductID = +e.target.dataset.id;
    let filteredProduct = filter.find(item => item.id === filteredProductID);
    currentFilteredProduct = filteredProduct;

    mainPage.innerHTML = "";
    filterDiv.innerHTML = "";
    filteredProductGrid.style.display = 'grid';
    createProduct(filteredProduct);

}

