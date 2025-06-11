const database = 'UAS_MBD';
const collection = 'RAWHAN';

use(database);

db.createCollection(collection);

db[collection].deleteOne({nama : "Arham"});

db[collection].find();