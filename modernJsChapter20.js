// Data awal (Object dan Array)
const product = {
  title: "Sepatu Lari",
  price: 500,
  category: "Olahraga",
  dimensions: { width: 15, height: 30 }
};

const products = [
  { title: "Sepatu Lari", price: 500 },
  { title: "Sandal", price: 50 },
  { title: "Kaos Kaki", price: 20 }
];



const label = `${product.title} - $${product.price}`;
console.log(label); 
// Hasil: "Sepatu Lari - $500"



const getTitle = (product) => product.title;
console.log(getTitle(product)); 
// Hasil: "Sepatu Lari"



// Object Destructuring
const { title, price, category } = product;
console.log(title, price, category); 
// Hasil: "Sepatu Lari" 500 "Olahraga"

// Array Destructuring
const [firstProduct, ...restProducts] = products;
console.log(firstProduct); // Hasil: { title: "Sepatu Lari", price: 500 }
console.log(restProducts); // Hasil: Array sisa (Sandal dan Kaos Kaki)



// Copy object & tambah property stock
const updatedProduct = { ...product, stock: 20 };
console.log(updatedProduct);

// Copy array & tambah product baru
const newProduct = { title: "Topi", price: 30 };
const merged = [...products, newProduct];
console.log(merged);



function sumPrices(...prices) {
  return prices.reduce((a, b) => a + b, 0);
}
console.log(sumPrices(100, 200, 300)); 
// Hasil: 600



// Mengambil width dengan aman, kalau tidak ada diisi "Tidak diketahui"
const width = product.dimensions?.width ?? "Tidak diketahui";
console.log(width); 
// Hasil: 15



function filterByCategory(products, category = "all") {
  console.log(`Kategori yang dipilih: ${category}`);
}

filterByCategory(products);          // Hasil: "Kategori yang dipilih: all" (karena kosong)
filterByCategory(products, "Baju");  // Hasil: "Kategori yang dipilih: Baju"