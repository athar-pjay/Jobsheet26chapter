// latihan 10.1

function countFrequency(arr) {
    return arr.reduce((counts, item) => {
        counts[item] = (counts[item] || 0) + 1;
        return counts;
    }, {});
}

const products = [
  { 
    title: "Sepatu", 
    price: 200000, 
    rating: 4.5, 
    category: "fashion", 
    tags: ["fashion", "shoes"], 
    brand: "Nike" 
  },
  { 
    title: "Baju", 
    price: 100000, 
    rating: 4.8, 
    category: "fashion", 
    tags: ["fashion", "shirt"]
    // sengaja tanpa brand untuk tes
  },
  { 
    title: "Celana", 
    price: 150000, 
    rating: 4.2, 
    category: "fashion", 
    tags: ["fashion", "pants"], 
    brand: "Nike" 
  }
];

// latihan 10.2

// Category
const categoryFreq = countFrequency(products.map(product => product.category));
console.log("category:", categoryFreq);

// Tags (menggunakan flatMap)
const tagFreq = countFrequency(products.flatMap(product => product.tags || []));
console.log("tags:", tagFreq);

// Rating (dibulatkan dengan Math.round)
const ratingFreq = countFrequency(products.map(product => Math.round(product.rating)));
console.log("rating:", ratingFreq);

// Brand (hanya jika tersedia/bukan undefined)
const brandFreq = countFrequency(
  products.map(product => product.brand).filter(brand => brand !== undefined)
);
console.log("brand:", brandFreq);
