function Products(stringArr) {
    let products = {}
    for (const data of stringArr) {
        let [townName, productName, productPrice] = data.split(" | ");
        productPrice = Number(productPrice);

        let product = {productName, price: {productPrice, townName}}
        if(products[productName] !== undefined){

            if(productPrice < products[productName].productPrice){
                products[productName].productPrice = productPrice;
                products[productName].townName = townName;
            }

            
        } else {
            products[product.productName] = product.price;
        }
    }

    for (const product in products) {
        if (Object.hasOwnProperty.call(products, product)) {
            const price = products[product];
            
            console.log(`${product} -> ${price.productPrice} (${price.townName})`)
        }
    }
}