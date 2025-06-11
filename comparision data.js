const database = 'UAS_MBD';
const collection = 'RAWHAN';

use(database);

db.createCollection(collection);

db[collection].find({umur : "26"});