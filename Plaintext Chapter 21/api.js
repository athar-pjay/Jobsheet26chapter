// Komunikasi dengan server DummyJSON
export async function fetchProducts() {
  try {
    const response = await fetch("https://dummyjson.com/products?limit=12");
    if (!response.ok) {
      throw new Error("Gagal mengambil data dari server");
    }
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.error("API Error:", error);
    return [];
  }
}