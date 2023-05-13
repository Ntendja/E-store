

const searchInput = document.querySelector(".searchInput");
const searchButton = document.querySelector(".searchButton");
const mainPage = document.querySelector(".mainPage");

//searchButton.addEventListener("click", resultSearch);
searchInput.addEventListener("input", async (e) =>{
    singleCategory = getSingleCategory();
    const value = e.target.value.toLocaleLowerCase();
    const filterProduct = products.filter((product) => {
        return product.title.toLocaleLowerCase().includes(value)
    })
    mainPage.innerHTML="";


    filterProduct.forEach(item=>{
        const searchGrid = createGrid(item);
        mainPage.appendChild(searchGrid);
    });

    console.log(filterProduct);
})














async function resultSearch(e) {
    //get product
    const singleCategory = await getSingleCategory();
    // get input field value
    const searchTerm = searchInput.value.toLowerCase();
    console.log(searchTerm);
    // filter product
    const filterProduct = singleCategory.filter(item => {
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




