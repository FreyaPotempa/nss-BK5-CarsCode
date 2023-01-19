import { CarsRUs } from "./CarsRUs.js";
import { isButtonDisabled } from "./database.js";

const mainContainer = document.querySelector("#container")

export const renderAllHTML = () => {
    mainContainer.innerHTML = CarsRUs()
    isButtonDisabled()
}

renderAllHTML()

/*
Edited with K to put the renderAllHTML in the button click event
document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})
*/