import { getInteriors, getOrders, getPaints, getTechnologies, getWheels } from "./database.js";

const paints = getPaints()
const interiors = getInteriors()
const technologies = getTechnologies()
const wheels = getWheels()

const buildOrderListItem = (order) => {
    const foundPaint = paints.find(
        (paint) => {
            return paint.id === order.paintId
        }
    )
    const foundInterior = interiors.find(
        (interior) => {
            return interior.id === order.interiorId
        }
    )
    const foundTech = technologies.find(
        (tech) => {
            return tech.id === order.technologyId
        }
    )
    const foundWheels = wheels.find(
        (wheel) => {
            return wheel.id === order.wheelId
        }
    )

    let totalCost = foundPaint.price 
    totalCost += foundInterior.price 
    totalCost += foundTech.price 
    totalCost += foundWheels.price

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    return `<li id="orderConfirmation">
    Order #${order.id} is a ${foundPaint.color} car with ${foundWheels.wheelType} wheels, ${foundInterior.type} interior, and the ${foundTech.package} package for a total cost of ${costString}.
    </li>`

}

export const Orders = () => {
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}