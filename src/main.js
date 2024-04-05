import { createRequest } from "./js/pixabay-api";
const form = document.querySelector(".search-form");

form.addEventListener("submit", handelSubmit);

function handelSubmit(event) {
    event.preventDefault();
    const dataSearch = event.currentTarget.elements.data.value;

    createRequest(dataSearch)
        .then(data => {
        console.log("data", data);
        })
        .catch(error => {
            console.log(error);
        })
        .finally(() => {
            form.reset();
    })
}


