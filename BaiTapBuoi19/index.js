const products = [
    {id: 1, name: 'iPhone', price: 2000},
    {id: 2, name: 'Samsung', price: 1500},
    {id: 3, name: 'Xiaomi', price: 1000},
    {id: 4, name: 'Oppo', price: 1200}
]
const orders = [
    {
        id: 1,
        items: [
            {productId: 1, quantity: 2},
            {productId: 2, quantity: 1}
        ]
    },
    {
        id: 2,
        items: [
            {productId: 1, quantity: 1},
            {productId: 3, quantity: 3}
        ]
    },
    {
        id: 3,
        items: [
            {productId: 2, quantity: 2},
            {productId: 4, quantity: 1}
        ]
    }
]

function getBestSellingProduct(products, orders) {

    // Create a product lookup map by id
    const productMap = {}

    for (const product of products) {
        productMap[product.id] = product
    }

    // Store total revenue for each product
    const revenueMap = {}

    for (const order of orders) {

        for (const item of order.items) {

            // Get product information by productId
            const product = productMap[item.productId]

            // Calculate current item revenue
            const revenue =
                product.price * item.quantity

            // Set initial revenue or add to existing revenue
            if (revenueMap[product.id] === undefined) {

                revenueMap[product.id] = revenue

            } else {

                revenueMap[product.id] =
                    revenueMap[product.id] + revenue
            }
        }
    }

    let bestProduct = null

    let maxRevenue = 0

    // Find the product with highest revenue
    for (const product of products) {

        let revenue = 0

        // Get product revenue if it exists
        if (revenueMap[product.id] !== undefined) {
            revenue = revenueMap[product.id]
        }

        // Update best product if revenue is higher
        if (revenue > maxRevenue) {

            maxRevenue = revenue

            bestProduct = {
                id: product.id,
                name: product.name,
                price: product.price,
                revenue: revenue
            }
        }
    }

    return bestProduct
}

console.log(
    getBestSellingProduct(products, orders)
);