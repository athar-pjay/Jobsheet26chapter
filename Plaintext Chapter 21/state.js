// Manajemen State Aplikasi
const state = {
  products: [],
  filteredProducts: []
};

export function getState() {
  return state;
}

export function setProducts(newProducts) {
  state.products = newProducts;
  state.filteredProducts = newProducts;
}

export function setFilteredProducts(filtered) {
  state.filteredProducts = filtered;
}