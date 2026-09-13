console.log("=== LATIHAN 16.1 ===");

// 1. Menyiapkan array 10.000 elemen terurut [0, 1, 2, ..., 9999]
const dataArray = Array.from({ length: 10000 }, (_, i) => i);
const target = 9999; // Target di posisi paling akhir (Worst Case)

// Linear Search — O(n)
function linearSearch(arr, target) {
  let steps = 0;
  for (let i = 0; i < arr.length; i++) {
    steps++; // Hitung setiap kali melakukan pemeriksaan
    if (arr[i] === target) {
      return steps;
    }
  }
  return steps;
}

// Binary Search — O(log n)
function binarySearch(arr, target) {
  let steps = 0;
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    steps++; // Hitung setiap kali melakukan pemeriksaan
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return steps;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return steps;
}

// Menjalankan & membandingkan hasil langkah
const langkahLinear = linearSearch(dataArray, target);
const langkahBinary = binarySearch(dataArray, target);

console.log(`Jumlah langkah Linear Search O(n)    : ${langkahLinear} langkah`);
console.log(`Jumlah langkah Binary Search O(log n): ${langkahBinary} langkah`);



console.log("\n=== LATIHAN 16.2 ===");

// 1. Menyiapkan 1.000 data produk
const products = Array.from({ length: 1000 }, (_, i) => ({
  id: i + 1,
  category: `Kategori_${i % 5}` // Ada 5 kategori (Kategori_0 sampai Kategori_4)
}));

// Pendekatan 1: Nested Loop — O(n²)
function groupWithNestedLoop(arr) {
  let steps = 0;
  const pairs = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      steps++; // Hitung setiap perbandingan antar pasangan
      if (arr[i].category === arr[j].category) {
        pairs.push([arr[i].id, arr[j].id]);
      }
    }
  }
  return steps;
}

// Pendekatan 2: Grouping Berbasis Map — O(n)
function groupWithMap(arr) {
  let steps = 0;
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    steps++; // Hitung setiap pembacaan produk
    const cat = arr[i].category;
    if (!map.has(cat)) {
      map.set(cat, []);
    }
    map.get(cat).push(arr[i]);
  }
  return steps;
}

// Menjalankan & membandingkan hasil langkah
const langkahNested = groupWithNestedLoop(products);
const langkahMap = groupWithMap(products);

console.log(`Jumlah langkah Nested Loop O(n²) : ${langkahNested} langkah`);
console.log(`Jumlah langkah Grouping Map O(n) : ${langkahMap} langkah`);