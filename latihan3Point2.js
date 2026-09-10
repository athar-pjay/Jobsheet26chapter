const products = [
  { id: 1, title: "Laptop", price: 1200, category: "laptops", stock: 5 },
  { id: 2, title: "Smartphone", price: 800, category: "phones", stock: 15 },
  { id: 3, title: "Headphones", price: 100, category: "audio", stock: 3 },
  // ... data produk lainnya
];

function updateStock(products, id, newStock) {
  return products.map(p => 
    p.id === id ? { ...p, stock: newStock } : p
  );
}

const updatedProducts = updateStock(products, 1, 10);
console.log(updatedProducts);
console.log(products[0].stock); // Output: 5 (original array remains unchanged)
