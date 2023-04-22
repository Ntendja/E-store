const fetchUrl = "https://api.escuelajs.co/api/v1";


    let allCategory = [];

async function getCategory() {
    const response = await fetch(`${fetchUrl}/categories`)
    return await response.json();
}

async function displayAllCategory(){
    allCategory = getCategory();

    console.log(allCategory);
}
