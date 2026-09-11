function bubbleSort(numbers) {
  // Salin array agar tidak memutasi (merusak) array input
  const arr = [...numbers];

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      // Bandingkan elemen bersebelahan, tukar jika urutannya salah
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}

function sortProducts(products, sortBy) {
  // Salin array agar tidak memutasi array input
  const sorted = [...products];

  return sorted.sort((a, b) => {
    if (sortBy === "price-asc") {
      return a.price - b.price; // Termurah -> Termahal
    } else if (sortBy === "price-desc") {
      return b.price - a.price; // Termahal -> Termurah
    } else if (sortBy === "rating") {
      return b.rating - a.rating; // Rating Tertinggi -> Terendah
    } else if (sortBy === "title") {
      return a.title.localeCompare(b.title); // Abjad A -> Z
    }
    return 0;
  });
}

// Latihan 8.1
const angka = [5, 3, 8, 1];
console.log("Hasil 8.1 (Bubble Sort):", bubbleSort(angka));

//  Latihan 8.2
const produk = [
  { title: "Sepatu", price: 200000, rating: 4.5 },
  { title: "Baju", price: 100000, rating: 4.8 },
  { title: "Celana", price: 150000, rating: 4.2 }
];

console.log("\nHasil 8.2 (Harga Termurah):", sortProducts(produk, "price-asc"));
console.log("\nHasil 8.2 (Rating Tertinggi):", sortProducts(produk, "rating"));