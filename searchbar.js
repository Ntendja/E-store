let filter;

let searchInput = document.querySelector(".searchInput");
let searchButton = document.querySelector(".searchButton");
let filterDiv = document.querySelector(".filter");


searchButton.addEventListener("click", resultSearch);

async function filterProducts(userInput) {
    const response = await fetch(`https://api.escuelajs.co/api/v1/products/?title=${userInput}`);
    return await response.json();
}

async function resultSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    filter = await filterProducts(searchTerm);
    mainPage.innerHTML = "";
    filterDiv.style.display = 'grid';
    filterProductGrid();
    searchInput.value = "";
}

// Function to create Grid
const filterProductGrid = () => {

    filter.forEach(item => {
        const grid = document.createElement("div");
        grid.classList.add("card");

        const image = document.createElement("img");
        image.setAttribute("src", item.images[0]);
        image.setAttribute("data-id", item.id);
        image.addEventListener("click", viewFilteredProduct);

        const titleCard = document.createElement("h3");
        titleCard.textContent = item.title;

        const price = document.createElement("p");
        price.textContent = `$ ${item.price}`;

        grid.appendChild(image);
        grid.appendChild(titleCard);
        grid.appendChild(price);

        filterDiv.appendChild(grid);
    })

}


// redirect to HomePage
let zurStartSeite = document.querySelector('.goToHomePage');
zurStartSeite.addEventListener('click', displayAllCategory);




