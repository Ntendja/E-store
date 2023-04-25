// new category with js

const form = document.querySelector("#new-category-form");
form.addEventListener("submit", formSubmit);

function formSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append(
        'name',
        document.querySelector('input[name="name"]').value
    )
    formData.append(
        'image',
        document.querySelector('input[name="image"]').value
    )
     fetch("https://api.escuelajs.co/api/v1/categories/",
         {
             method: "POST",
             body: formData
         })
         .then(response => console.log(response))
         .catch(error => console.log(error))

    alert("The form was submitted");

}




// create form
/*
const createForm = () =>{
    const h2 = document.createElement("h2");
    const form = document.createElement("form");
    form.id = 'new-category-form';
    form.method = 'POST';

    const labelName = document.createElement("label");
    labelName.textContent = `Name`;

    const inputName = document.createElement("input");
    inputName.type = 'text';
    inputName.name = 'name';
    inputName.id = 'new-category-name';
    inputName.setAttribute("required", "");

    const labelImage = document.createElement("label");
    labelImage.textContent = `Image`;

    const inputImage = document.createElement("input");
    inputImage.type = 'image';
    inputImage.id = 'image';
    inputName.setAttribute("src", "");
    inputName.setAttribute("alt", "");

    const btnSubmit = document.createElement("button");
    btnSubmit.type = 'submit';
    btnSubmit.id = 'btn-submit-category';
    btnSubmit.textContent =`Submit`;

    form.appendChild(labelName);
    form.appendChild(inputName);
    form.appendChild(labelImage);
    form.appendChild(btnSubmit);

    sectionNewCategory.appendChild(h2);
    sectionNewCategory.appendChild(form);

}
*/
