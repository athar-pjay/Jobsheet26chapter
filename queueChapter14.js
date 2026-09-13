class Queue {
  constructor() {
    this.items = [];
  }

  // Menambahkan elemen ke akhir antrean
  enqueue(item) {
    this.items.push(item);
  }

  // Menghapus dan mengembalikan elemen pertama (terdepan)
  dequeue() {
    return this.items.shift();
  }

  // Melihat elemen pertama tanpa menghapusnya
  peek() {
    return this.items[0];
  }
}

// Contoh Penggunaan (Simulasi Request Queue):
const requestQueue = new Queue();

requestQueue.enqueue("Request 1");
requestQueue.enqueue("Request 2");

console.log(requestQueue.peek()); // Output: "Request 1"
console.log(requestQueue.dequeue()); // Output: "Request 1"
console.log(requestQueue.peek()); // Output: "Request 2"

// study case: simulasi antrean printer

const printQueue = new Queue();

// Pengguna mengirim dokumen untuk diprint
printQueue.enqueue("Dokumen_A.pdf"); // Antrean: ["Dokumen_A.pdf"]
printQueue.enqueue("Dokumen_B.pdf"); // Antrean: ["Dokumen_A.pdf", "Dokumen_B.pdf"]
printQueue.enqueue("Dokumen_C.pdf"); // Antrean: ["Dokumen_A.pdf", "Dokumen_B.pdf", "Dokumen_C.pdf"]

// Printer mengecek dokumen apa yang harus diprint dulu
console.log(printQueue.peek()); 
// Output: "Dokumen_A.pdf" (karena Dokumen_A yang masuk pertama)

// Printer selesai memproses Dokumen A
console.log(printQueue.dequeue()); 
// Output: "Dokumen_A.pdf" (Dokumen_A dihapus dari antrean)

// Cek dokumen berikutnya yang antre
console.log(printQueue.peek()); 
// Output: "Dokumen_B.pdf"