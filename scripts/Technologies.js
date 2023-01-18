import { getTechnologies, setTechnology } from "./database.js";

const technologies = getTechnologies()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "tech") {
            setTechnology(parseInt(event.target.value))
        }

    }
)


export const technologyOptions = () => {
    let html = "<h2>Technologies</h2>"
    html += '<select id="tech">'
    html += '<option value="0">Select a technology package</option>'

    const listItems = technologies.map(technology => {
        return `<option value="${technology.id}"> ${technology.package}</option>`
    })

    html += listItems.join("")
    html += "</select>"

    return html
}