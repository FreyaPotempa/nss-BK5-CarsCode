import { getPaints, setPaint } from "./database.js"


const paints = getPaints()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "paint") {
            setPaint(parseInt(event.target.value))
        }

    }
)


export const paintOptions = () => {
    let html = "<h2>Paints</h2>"

    html += '<select id="paint">'
    html += '<option value="0">Select a Paint Color</option>'

    const listItems = paints.map(paint => {
        return `<option value="${paint.id}"> ${paint.color}</option>`
    })

    html += listItems.join("")
    html += "</select>"

    return html
}