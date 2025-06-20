db.key_value_store.deleteMany({});

db.key_value_store.insertMany([
  { _id: "product:001", value: { name: "Kaos Hitam", price: 50000 } },
  { _id: "product:002", value: { name: "Celana Jeans", price: 120000 } },
  { _id: "product:003", value: { name: "Hoodie Hitam", price: 150000 } },
  { _id: "product:004", value: { name: "Sepatu Sneakers", price: 250000 } },
  { _id: "product:005", value: { name: "Topi Trucker", price: 40000 } }
]);

db.key_value_store.find({ _id: "product:003" });