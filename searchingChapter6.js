// latihan 6.1

function linearSearch(arr, target) {
  // Tambahkan perulangan for yang sempat hilang
  for (let i = 0; i < arr.length; i++) { 
    if (arr[i] === target) {
      return i; // Return index jika ketemu
    }
  }
  return -1; // Return -1 jika tidak ketemu
}

// latihan 6.2

const products = [
  { id: 1, title: "Laptop", price: 1200, category: "laptops", stock: 5 },
  { id: 2, title: "Smartphone", price: 800, category: "phones", stock: 15 },
  { id: 3, title: "Headphones", price: 100, category: "audio", stock: 3 },
  // ... data produk lainnya
];

function findProductById(products, id) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      return products[i]; // Return the product if found
    }
  }
  return null; // Return null if not found
}

console.log(findProductById(products, 2)); // Output: { id: 2, title: "Smartphone", price: 800, category: "phones", stock: 15 }
console.log(findProductById(products, 2).title === "Smartphone", "Test failed: Expected title to be 'Smartphone'");
