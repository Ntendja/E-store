
async function filterProducts(userInput) {
    const response = await fetch(`https://api.escuelajs.co/api/v1/products/?title=${userInput}`);
    return await response.json();
}

let filterDiv = document.querySelector(".filter");
let searchInput = document.querySelector(".searchInput");
let searchButton = document.querySelector(".searchButton");
const mainPage = document.querySelector(".mainPage");

searchButton.addEventListener("click", resultSearch);
let filter;

async function resultSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    console.log(searchTerm);

     filter = await filterProducts(searchTerm);
     console.log("filtered before", filter);

mainPage.style.display = 'none';

    filterDiv.style.display = 'grid';
    filterProductGrid();



    searchInput.value = "";
}

// Function to create Grid
const filterProductGrid = () => {
    const grid = document.createElement("div");
    grid.classList.add("card");

    filter.forEach(item => {

        const image = document.createElement("img");
        image.setAttribute("src", item.images[0]);
        image.setAttribute("data-id", item.id);
        image.addEventListener("click", viewProduct);

        const titleCard = document.createElement("h3");
        titleCard.textContent = item.title;

        const price = document.createElement("p");
        price.textContent = `$ ${item.price}`;

        grid.appendChild(image);
        grid.appendChild(titleCard);
        grid.appendChild(price);

        filterDiv.appendChild(grid);
    })
};
