db.wide_column_store.deleteMany({}); // opsional: bersihkan koleksi

db.wide_column_store.insertMany([
  { _id: "product:001", name: "Kaos Hitam", price: 50000, color: "Putih", stock: 100 },
  { _id: "product:002", name: "Celana Jeans", price: 120000, size: "32", stock: 75 },
  { _id: "product:003", name: "Hoodie Hitam", price: 150000, material: "Katun", hoodie: true },
  { _id: "product:004", name: "Sepatu Sneakers", price: 250000, brand: "Nike", size: 42 },
  { _id: "product:005", name: "Topi Trucker", price: 40000, adjustable: true, color: "Hitam" }
]);
