function buildProductLookup(products) {
    const productMap = new Map();

    for (const product of products) {
        productMap.set(product.id, product);
    }

    return productMap;
}

const products = [
    { id: 1, title: "Sepatu", price: 200000, rating: 4.5 },
    { id: 2, title: "Baju", price: 100000, rating: 4.8 },
    { id: 3, title: "Celana", price: 150000, rating: 4.2 }
];

const productLookup = buildProductLookup(products);
console.log(productLookup);
