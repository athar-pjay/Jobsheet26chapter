// binary search standard (latihan 7.1)
 
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 3));

// latihan 7.2 

const products = [
  { id: 1, title: "Laptop", price: 1200, category: "laptops", stock: 5 },
  { id: 2, title: "Smartphone", price: 800, category: "phones", stock: 15 },
  { id: 3, title: "Headphones", price: 100, category: "audio", stock: 3 },
  // ... data produk lainnya
];

const sortedProducts = products.sort((a, b) => a.id - b.id);

function binarySearchProductById(products, id) {
  let left = 0;
  let right = products.length - 1;  

    while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (sortedProducts[mid].id === id) {
      return sortedProducts[mid]; // Return the product if found

    } else if (sortedProducts[mid].id < id) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

 return null; // Return null if not found
}   

console.log("produk Terurut Berdasarkan Price");
console.log(sortedProducts);

const cariHarga = 500000;
const hasilCari = binarySearchProductById(sortedProducts, cariHarga);

console.log("\nHasil Pencarian:");
console.log(hasilCari);
