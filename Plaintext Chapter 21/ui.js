import { formatRupiah } from "./utils.js";

// Rendering Tampilan DOM
export function renderProducts(containerId, products) {
  const container = document.getElementById(containerId);
  if (!container) return;

  if (products.length === 0) {
    container.innerHTML = "<p>Produk tidak ditemukan.</p>";
    return;
  }

  container.innerHTML = products
    .map(
      (product) => `
      <div style="border: 1px solid #ccc; padding: 12px; margin: 8px; border-radius: 6px;">
        <h3>${product.title}</h3>
        <p><strong>Kategori:</strong> ${product.category}</p>
        <p><strong>Harga:</strong> ${formatRupiah(product.price)}</p>
      </div>
    `
    )
    .join("");
}