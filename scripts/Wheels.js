import { getWheels, setWheel } from "./database.js";

const wheels = getWheels()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "wheel") {
            setWheel(parseInt(event.target.value))
        }

    }
)


export const wheelOptions = () => {
    let html = "<h2>Wheels</h2>"

    html += '<select id="wheel">'
    html += '<option value="0">Select a Wheel Type</option>'

    const listItems = wheels.map(wheel => {
        return `<option value="${wheel.id}"> ${wheel.wheelType}
        </option>`
    })

    html += listItems.join("")
    html += "</select>"

    return html
}