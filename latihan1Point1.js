function calculateDiscountedPrice(price, discountPercent) {
  return price - (price * discountPercent) / 100;
}

console.log(calculateDiscountedPrice(100, 10)); // Output: 90