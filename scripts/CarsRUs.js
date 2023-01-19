import { paintOptions } from "./Paints.js";
import { interiorOptions } from "./Interiors.js";
import { technologyOptions } from "./Technologies.js";
import { wheelOptions } from "./Wheels.js";
import { Orders } from "./Orders.js";
import { addCustomOrder, isButtonDisabled } from "./database.js";

document.addEventListener(
    "click",
    (click) => {
        if (click.target.id === "orderButton") {
            addCustomOrder()
        }
    }
)

document.addEventListener(
    "change",
    () => {
        isButtonDisabled()
    }
)


export const CarsRUs = () => {
    return `
    <h1>Cars 'R Us</h1>
    
    <article class="choices">
        <section class="choices__paint options">
            ${paintOptions()}
        </section>
        <section class="choices__interior options">
            ${interiorOptions()}
        </section>
        <section class="choices__technology options">
            ${technologyOptions()}
        </section>
        <section class="choices__wheel options">
            ${wheelOptions()}
        </section>
    </article>
        
    <article>
        <button id="orderButton">Create Custom Order</button>
    </article>
        
    <article class="customOrders">
        <h2>Custom Car Orders</h2>
        ${Orders()}
    </article>
        `
}