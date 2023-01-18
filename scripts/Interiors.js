import { getInteriors, setInterior } from "./database.js";

const interiors = getInteriors()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "interior") {
            setInterior(parseInt(event.target.value))
        }

    }
)

export const interiorOptions = () => {
    let html = "<h2>Interiors</h2>"

    html += '<select id="interior">'
    html += '<option value="0">Select an Interior</option>'

    const listItems = interiors.map(interior => {
        return `<option value="${interior.id}"> ${interior.type}</option>`
    })

    html += listItems.join("")
    html += "</select>"

    return html
}