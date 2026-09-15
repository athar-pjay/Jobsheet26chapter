// Linear Search (Pencarian Teks)
export function linearSearch(array, keyword) {
  if (!keyword) return array;
  return array.filter((item) =>
    item.title.toLowerCase().includes(keyword.toLowerCase())
  );
}

// Binary Search (Pencarian cepat berdasar ID pada data terurut)
export function binarySearch(sortedArray, targetId) {
  let left = 0;
  let right = sortedArray.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (sortedArray[mid].id === targetId) {
      return sortedArray[mid];
    }
    if (sortedArray[mid].id < targetId) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return null;
}

// Grouping berdasarkan Kategori
export function groupByCategory(products) {
  return products.reduce((groups, product) => {
    const category = product.category;
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(product);
    return groups;
  }, {});
}