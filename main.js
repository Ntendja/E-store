const fetchUrl = "https://api.escuelajs.co/api/v1";

let allCategory = [];


async function getCategory() {
    const response = await fetch(`${fetchUrl}/categories`)
    return await response.json();
}

async function displayAllCategory() {
    allCategory = await getCategory();

    console.log(allCategory);

    createCategoryCard();

}

displayAllCategory();

const createCategoryCard = () => {

    let categoryCard = document.querySelector(".cardDisplay");

    allCategory.forEach(item => {
const card = document.createElement("div");
card.classList.add("card");

const img = document.createElement("img");
img.setAttribute("src", item.image);
//img.setAttribute("alt", item.name);

const h3 = document.createElement("h3");
h3.textContent = item.name;

card.appendChild(img);
card.appendChild(h3);

categoryCard.appendChild(card);

    })
}