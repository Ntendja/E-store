

const searchInput = document.querySelector(".searchInput");
const searchButton = document.querySelector(".searchButton");
const mainPage = document.querySelector(".mainPage");
searchButton.addEventListener("click", resultSearch);

/*
searchInput.addEventListener("input", async (e) =>{
    products = getCategoryProducts();
    const value = e.target.value.toLocaleLowerCase();
    const filterProduct = products.filter((item) => {
        return item.title.toLocaleLowerCase().includes(value)
    })
    mainPage.innerHTML="";


    filterProduct.forEach(item=>{
        const searchGrid = createGrid(item);
        mainPage.appendChild(searchGrid);
    });

    console.log(filterProduct);
})
*/


async function resultSearch() {

    // get input field value
    const searchTerm = searchInput.value.toLowerCase();
    console.log(searchTerm);
    //get product
    const categoryProducts = await getCategoryProducts();

    // filter product
    const filterProduct = categoryProducts.filter(item => {
        return item.title.toLowerCase().includes(searchTerm);
    });
// clean DOM
    mainPage.innerHTML = "";

    // create Grid
    filterProduct.forEach(item => {
        const searchGrid = createGrid(item);
        mainPage.appendChild(searchGrid);
    });

    console.log("Search term:", searchTerm);
    // clean input field user
    searchInput.value = "";
}



// Function to create Grid
function createGrid(item) {
    const searchGrid = document.createElement("div");
    searchGrid.classList.add("card");

    const title = document.createElement("h2");
    title.textContent = item.title;
    searchGrid.appendChild(title);

    const price = document.createElement("p");
    price.textContent = `$ ${item.price}`;
    searchGrid.appendChild(price);

    return searchGrid;
}




