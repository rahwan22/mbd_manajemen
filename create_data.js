const database = 'UAS_MBD';
const collection = 'RAWHAN';

use(database);

db.createCollection(collection);

db[collection].insertMany([
    {nama : "Rahwan", nim : "D0222005", jk : "laki-laki", jurusan : "informatika", umur : 23},
    {nama : "Sri Maharani", nim : "D0222034", jk : "perempuan", jurusan : "informatika", umur : 21},
    {nama : "Srinadyla", nim : "D0222047", jk : "perempuan", jurusan : "informatika", umur : 21},
    {nama : "Arham", nim : "D0222012", jk : "laki-laki", jurusan : "informatika", umur : 90},
])
db[collection].find();