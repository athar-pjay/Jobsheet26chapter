const products = [
  { id: 1, title: "Laptop", price: 1200, category: "laptops", stock: 5 },
  { id: 2, title: "Smartphone", price: 800, category: "phones", stock: 15 },
  { id: 3, title: "Headphones", price: 100, category: "audio", stock: 3 },
  // ... data produk lainnya
];

const titles = products.map(product => product.title);
console.log(titles);    

const expensiveProducts = products.filter(product => product.price > 500);      
console.log(expensiveProducts);

const totalStock = products.reduce((total, product) => total + product.stock, 0);
console.log(totalStock);

// latihan 5.1

const laptopPrice = products
    .filter(product => product.category === "laptops") 
    .map(product => product.price);
console.log(laptopPrice);

const avgPrice = products.reduce((total, product) => total + product.price, 0) / products.length;
console.log(avgPrice);

// latihan 5.2

function getStatistics(products) {
if (!products || products.length === 0) return null;

const totalProducts = products.length;

const totalPrice = products.reduce((total, product) => total + product.price, 0);
const averagePrice = totalPrice / totalProducts;

const highestPriceProduct = products.reduce((max, product) => product.price > max.price ? product : max, products[0]);
const lowestPriceProduct = products.reduce((min, product) => product.price < min.price ? product : min, products[0]);

const totalStock = products.reduce((total, product) => total + product.stock, 0);

const totalRating = products.reduce((total, product) => total + (product.rating || 0), 0);
const averageRating = totalProducts > 0 ? totalRating / totalProducts : 0;

    return {  
  totalProducts,
  totalPrice,
  averagePrice,
  highestPriceProduct,
  lowestPriceProduct,
  totalStock,
  totalRating,
  averageRating
    };  
}