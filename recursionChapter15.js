function countdown(n) {
  if (n <= 0) {
    console.log("Selesai");
    return; // Ini REM-nya! Kalau n sudah 0, berhenti.
  }
  
  console.log(n); // Cetak angkanya
  countdown(n - 1); // Panggil dirinya lagi, tapi angkanya dikurangin 1
}

countdown(11);

// soal 15.1

// 1. DATA SOAL (Kategori Bertingkat)
const categories = [
  {
    name: "Electronics",
    children: [
      { name: "Laptop", children: [] },
      { name: "Phone", children: [] }
    ]
  }
];

// 2. FUNGSI SESUAI PERINTAH / JAWABAN (Latihan 15.1)
function printCategories(categories, depth = 0) {
  for (const category of categories) {
    // Cetak nama dengan spasi sesuai kedalaman (depth)
    console.log("  ".repeat(depth) + category.name);
    
    // Jika punya anak/sub-kategori, panggil fungsi ini lagi (Rekursi)
    if (category.children.length > 0) {
      printCategories(category.children, depth + 1);
    }
  }
}

// 3. PEMANGGILAN FUNGSI
printCategories(categories);