const products = [
  { title: "Sepatu", price: 200000, rating: 4.5, category: "fashion" },
  { title: "Baju", price: 100000, rating: 4.8, category: "fashion" },
  { title: "Celana", price: 150000, rating: 4.2, category: "fashion" }
];

function groupByCategory(products) {
  return products.reduce((groups, product) => {
    const key = product.category; // Pastikan ejaannya 'category'
    if (!groups[key]) groups[key] = [];
    groups[key].push(product);
    return groups;
  }, {});
}

const groupedProducts = groupByCategory(products);
console.log(groupedProducts);

const summary = Object.keys(groupedProducts).map(category => ({
  Kategori: category,
  "Jumlah Produk": groupedProducts[category].length
}));

console.table(summary);