// 1. MEMBUAT JANJI (Sistem mengecek pesanan)
const promise = new Promise((resolve, reject) => {
  const success = true; // Anggap aja: restorannya BUKA

  if (success) {
    resolve("Martabak Sampai!"); // Panggil resolve kalau BUKA
  } else {
    reject("Restoran Tutup!");    // Panggil reject kalau TUTUP
  }
});


// 2. REAKSI KAMU (Menunggu hasil)
promise
  .then(hasil => console.log(hasil))  
  // Kalau resolve dipanggil, kode ini yang jalan.
  // Output: "Martabak Sampai!"

  .catch(error => console.log(error)) 
  // Kalau reject dipanggil, kode ini yang jalan.
  // (Diabaikan karena restorannya buka)

  .finally(() => console.log("Tutup Aplikasi")); 
  // MAU SUKSES ATAU GAGAL, ini TETAP jalan paling akhir.
  // Output: "Tutup Aplikasi"