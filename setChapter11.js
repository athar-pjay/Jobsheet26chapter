const products = [
  { category: "Electronics", brand: "Apple", tag: ["gadget", "promo"], price: 999 },
  { category: "Electronics", brand: "Samsung", tag: ["gadget"], price: 799 },
  { category: "Fashion", brand: "Nike", tag: ["shoes", "promo"], price: 199 },
  { category: "Fashion", brand: "Adidas", tag: ["shoes"], price: 149 }
];

// Logika pemrosesan Set ini SUDAH BENAR
const uniqueCategories = [...new Set(products.map(product => product.category))];
console.log(uniqueCategories);
// Output: ["Electronics", "Fashion"]

const uniqueBrands = [...new Set(products.map(product => product.brand))];
console.log(uniqueBrands);
// Output: ["Apple", "Samsung", "Nike", "Adidas"]

const uniqueTags = [...new Set(products.flatMap(product => product.tag))];
console.log(uniqueTags);
// Output: ["gadget", "promo", "shoes"]