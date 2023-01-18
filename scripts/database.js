const database = {
    orderBuilder: {},
    paints: [
        { id: 1, color: "Silver", price: 500},
        { id: 2, color: "Midnight Blue", price: 900},
        { id: 3, color: "Firebrick Red", price: 1200},
        { id: 4, color: "Spring Green", price: 500}
    ],
    interiors: [
        {id: 1, type: "Beige Fabric", price: 800},
        {id: 2, type: "Charcoal Fabric", price: 800},
        {id: 3, type: "White Leather", price: 2000},
        {id: 4, type: "Black Leather", price: 2000}
    ],
    technologies: [
        {id: 1, package: "Basic Package", price: 600},
        {id: 2, package: "Navigation Package", price: 1000},
        {id: 3, package: "Visibility Package", price: 1500},
        {id: 4, package: "Ultra Package", price: 2500},
    ],
    wheels: [
        {id: 1, wheelType: "17-inch Pair Radial", price: 800},
        {id: 2, wheelType: "17-inch Pair Radial Black", price: 1000},
        {id: 3, wheelType: "18-inch Pair Spoke Silver", price: 1200},
        {id: 4, wheelType: "18-inch Pair Spoke Black", price: 1200},
    ],
    customOrders: [ //sample to see if code displays correctly
        {
            id: 1, 
            paintId: 2, 
            interiorId: 3,
            technologyId: 2,
            wheelId: 1,
            timestamp: 1614659931693
         }
    ]
}

export const getPaints = () => {
    return database.paints.map(paint => ({...paint}))
}

export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}

export const getTechnologies = () => {
    return database.technologies.map(technology => ({...technology}))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}

export const getOrders = () => {
    return database.customOrders.map(order => ({...order}))
}

export const setPaint = (id) => {
    database.orderBuilder.paintId = id
}

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}

export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id
}

export const setWheel = (id) => {
    database.orderBuilder.wheelId = id
}

export const addCustomOrder = () => {
    const newOrder = {...database.orderBuilder}

    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    newOrder.timestamp = Date.now()

    database.customOrders.push(newOrder)

    database.orderBuilder = {}

    document.dispatchEvent(new CustomEvent("stateChanged"))
}