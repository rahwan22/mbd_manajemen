const database = 'UAS_MBD';
const collection = 'RAWHAN';

use(database);

db.createCollection(collection);

db[collection].updateOne(
    {nama : "Rahwan"},
    {$set : {umur : "26"}}
);

db[collection].find();