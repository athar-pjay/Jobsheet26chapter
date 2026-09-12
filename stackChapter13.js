class Stack {
  constructor() {
    this.items = [];
  }

  // Menambahkan elemen baru ke puncak tumpukan
  push(item) {
    this.items.push(item);
  }

  // Menghapus dan mengembalikan elemen dari puncak tumpukan
  pop() {
    if (this.isEmpty()) {
      return "Stack kosong";
    }
    return this.items.pop();
  }

  // Melihat elemen paling atas tanpa menghapusnya
  peek() {
    return this.items[this.items.length - 1];
  }

  // Memeriksa apakah tumpukan sedang kosong
  isEmpty() {
    return this.items.length === 0;
  }
}

// latihan 13.2

// Inisialisasi stack pencarian
const searchHistory = new Stack();

// 1. User melakukan pencarian produk secara berurutan
searchHistory.push("laptop");
searchHistory.push("phone");
searchHistory.push("tablet");

console.log("Pencarian aktif saat ini:", searchHistory.peek()); 
// Output: "tablet"

// 2. User menjalankan fitur "Undo Search"
const lastSearch = searchHistory.pop();
console.log("Keyword yang dibatalkan (undo):", lastSearch); 
// Output: "tablet"

// 3. Menampilkan pencarian sebelumnya setelah undo
console.log("Pencarian aktif setelah undo:", searchHistory.peek()); 
// Output: "phone"

// 4. Undo sekali lagi
searchHistory.pop();
console.log("Pencarian aktif setelah undo 2x:", searchHistory.peek()); 
// Output: "laptop"