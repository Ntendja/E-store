const fetchUrl = "https://api.escuelajs.co/api/v1";

// save all category in array
let allCategory = [];


// get all category
async function getCategory() {
    const response = await fetch(`${fetchUrl}/categories`)
    return await response.json();
}


// display category card
async function displayAllCategory() {
    allCategory = await getCategory();

    console.log(allCategory);

    createCategoryCard();
}
displayAllCategory();



// create category card
const createCategoryCard = () => {

    let categoryCard = document.querySelector(".cardDisplay");

    allCategory.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.setAttribute("src", item.image);
        img.setAttribute("alt", item.name);

        const h3 = document.createElement("h3");
        h3.textContent = item.name;

        card.appendChild(img);
        card.appendChild(h3);

        categoryCard.appendChild(card);

    })
}