const database = 'UAS_MBD';
const collection = 'RAWHAN';

use(database);

db.createCollection(collection);


db.RAWHAN.bulkWrite([

  {
    insertOne: {
      document: {
        nama: "Andi",
        nim: "D0222015",
        jk: "laki-laki",
        jurusan: "informatika",
        umur: 20
      }
    }
  },
  

  {
    updateOne: {
      filter: { nama: "Arham" },
      update: { $set: { umur: 22 } } 
    }
  },
  
 
  {
    deleteOne: {
      filter: { nim: "D0222047" }
    }
  },
  
 
  {
    updateMany: {
      filter: { jk: "perempuan" },
      update: { $set: { angkatan: 2022 } }
    }
  }
]);

db.RAWHAN.find();