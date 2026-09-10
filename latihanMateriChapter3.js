const products = [
  {
    id: 1,
    title: "Laptop",
    price: 1200,
    rating: 4.5,
    stock: 10,
    category: "laptops",
    tags: ["computer", "electronics", "office"],
    dimensions: { width: 30, height: 2, depth: 20 },
    reviews: [
      { user: "A", rating: 5, comment: "Good product" },
      { user: "B", rating: 4, comment: "Worth it" }
    ]
  },
  {
    id: 2,
    title: "Smartphone",
    price: 800,
    rating: 4.2,
    stock: 15,
    category: "phones",
    tags: ["mobile", "electronics"],
    dimensions: { width: 7, height: 0.8, depth: 15 },
    reviews: [
      { user: "C", rating: 4, comment: "Nice camera" },
      { user: "D", rating: 5, comment: "Fast" },
      { user: "E", rating: 3, comment: "Battery so-so" }
    ]
  }
];

// 1. Ambil semua tag dari seluruh produk menjadi satu array (array di dalam array)
const allTags = products.map(p => p.tags);

// 2. Buat function findProductsByTag(products, tag)
function findProductsByTag(products, tag) {
  return products.filter(p => p.tags.includes(tag));
}

// 3. Hitung jumlah review pada setiap produk -> { id, title, totalReviews }
const totalReviewsPerProduct = products.map(p => ({
  id: p.id,
  title: p.title,
  totalReviews: p.reviews.length
}));

// 4. Dari seluruh produk, kumpulkan review yang ratingnya 5
const reviewsWithRating5 = products
  .flatMap(p => p.reviews)
  .filter(review => review.rating === 5);

// 5. Hitung rata-rata rating dari array reviews pada setiap produk secara manual
const averageReviewsRating = products.map(p => {
  const totalRating = p.reviews.reduce((sum, review) => sum + review.rating, 0);
  const avg = p.reviews.length > 0 ? totalRating / p.reviews.length : 0;
  return {
    id: p.id,
    title: p.title,
    averageRating: avg
  };
});

// 6. Temukan produk dengan jumlah review terbanyak
const productWithMostReviews = products.reduce((maxProduct, currentProduct) => {
  return currentProduct.reviews.length > maxProduct.reviews.length ? currentProduct : maxProduct;
});

// 7. Kumpulkan seluruh nilai rating dari semua review di semua produk menjadi satu array datar
const allRatingsFlat = products.flatMap(p => p.reviews.map(r => r.rating));


// --- UJI COBA OUTPUT ---
console.log("Nomor 1:", allTags);
console.log("Nomor 2:", findProductsByTag(products, "mobile"));
console.log("Nomor 3:", totalReviewsPerProduct);
console.log("Nomor 4:", reviewsWithRating5);
console.log("Nomor 5:", averageReviewsRating);
console.log("Nomor 6:", productWithMostReviews);
console.log("Nomor 7:", allRatingsFlat);