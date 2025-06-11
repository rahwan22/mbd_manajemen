const database = 'UAS_MBD';
const collection = 'RAWHAN';

use(database);

db.createCollection(collection);

db[collection].aggregate([
    {
        $group: {
            _id: "$kategori",
            total_umur: {$sum : "$umur"},
            rata2_umur: {$avg : "$umur"}
        }
    }

]);