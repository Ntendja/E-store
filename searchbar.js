async function filterProducts(userInput) {
    const response = await fetch(`https://api.escuelajs.co/api/v1/products/?title=${userInput}`)
    return await response.json();
}

let filteredProduct = [];


let searchInput = document.querySelector(".searchInput");
let searchButton = document.querySelector(".searchButton");
const mainPage = document.querySelector(".mainPage");
searchButton.addEventListener("click", resultSearch);

async function resultSearch() {

    const searchTerm = searchInput.value.toLocaleLowerCase();
    console.log(searchTerm);

    const filter = await filterProducts(searchTerm);
console.log(filter);
mainPage.innerHTML = "";
    //filterProductGrid(filter);
    console.log(filter);
    searchInput.value = "";
}
 //resultSearch();


// Function to create Grid



