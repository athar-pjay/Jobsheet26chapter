// Fungsi renderProducts dari materi
function renderProducts(products) {
  const container = document.querySelector("#product-list");
  container.innerHTML = "";

  for (const product of products) {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
      <img src="${product.thumbnail}" alt="${product.title}">
      <h3>${product.title}</h3>
      <p>${product.category}</p>
      <p>Harga: $${product.price}</p>
      <p>Rating: ${product.rating}</p>
    `;
    container.append(card);
  }
}

// Data dummy 5 produk sesuai instruksi Latihan 17.1
const dummyProducts = [
  {
    title: "Laptop Gaming",
    thumbnail: "https://via.placeholder.com/150",
    category: "Elektronik",
    price: 1200,
    rating: 4.8
  },
  {
    title: "Smartphone flagship",
    thumbnail: "https://via.placeholder.com/150",
    category: "Elektronik",
    price: 800,
    rating: 4.6
  },
  {
    title: "Sepatu Lari",
    thumbnail: "https://via.placeholder.com/150",
    category: "Olahraga",
    price: 95,
    rating: 4.5
  },
  {
    title: "Tas Punggung",
    thumbnail: "https://via.placeholder.com/150",
    category: "Aksesoris",
    price: 45,
    rating: 4.3
  },
  {
    title: "Jam Tangan Digital",
    thumbnail: "https://via.placeholder.com/150",
    category: "Aksesoris",
    price: 110,
    rating: 4.7
  }
];

// Menjalankan fungsi render dengan data dummy
renderProducts(dummyProducts);