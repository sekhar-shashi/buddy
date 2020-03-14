const { MongoClient } = require('mongodb');

const uri = 'mongodb://192.168.2.152:27017';

const insert = async (db, val) => {
  var myStudent = { name: 'shashi', author: 'shashi' };
  db.collection('article').insertOne(myStudent, function (err, result) {
        if (err) throw err;
        console.log("1 Recorded Inserted");
    });
};

const create = async (val) => {
  /**
   * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
   * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
   */
  //   const uri =
  //     'mongodb+srv://<username>:<password>@<your-cluster-url>/test?retryWrites=true&w=majority';

  const client = new MongoClient(uri);

  try {
    // Connect to the MongoDB cluster
    const mongoClient = await client.connect();
    const db = mongoClient.db('articles');

    // Make the appropriate DB calls
    await insert(db, val);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
};

// eslint-disable-next-line no-console
module.exports = create;
