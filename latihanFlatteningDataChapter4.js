const products = [
  {
    title: "Laptop",
    tags: ["computer", "office"],
    reviews: [
      { comment: "Bagus banget!" },
      { comment: "Layar jernih" }
    ]
  },
  {
    title: "Phone",
    tags: ["mobile"],
    reviews: [
      { comment: "Baterai awet" }
    ]
  }
];


const allTags = products.flatMap(p => p.tags);


const allComments = products.flatMap(p => p.reviews.map(r => r.comment));


console.log("hasil latihan 4.1:", allTags);
console.log("hasil latihan 4.2:", allComments);