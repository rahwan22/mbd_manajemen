const database = 'UAS_MBD';
const collection = 'RAWHAN';

use(database);

db.createCollection(collection);

db[collection].find();
db[collection].find({
    nama : "Rahwan"
});
