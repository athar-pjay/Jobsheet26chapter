import { fetchProducts } from "./api.js";
import { linearSearch, groupByCategory } from "./algorithms.js";
import { setProducts, setFilteredProducts, getState } from "./state.js";
import { renderProducts } from "./ui.js";

async function initApp() {
  console.log("Memulai aplikasi...");

  // 1. Ambil Data dari API
  const products = await fetchProducts();
  setProducts(products);

  // 2. Render Tampilan Awal
  renderProducts("product-list", getState().products);

  // 3. Event Listener untuk Fitur Pencarian
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (event) => {
      const keyword = event.target.value;
      const filtered = linearSearch(getState().products, keyword);
      setFilteredProducts(filtered);
      renderProducts("product-list", getState().filteredProducts);
    });
  }

  // Debugging di konsol (menampilkan hasil grouping)
  console.log("Data Terkelompok:", groupByCategory(getState().products));
}

// Jalankan ketika DOM siap
document.addEventListener("DOMContentLoaded", initApp);