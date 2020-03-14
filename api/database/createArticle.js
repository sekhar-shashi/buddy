const { MongoClient } = require('mongodb');

const uri = 'mongodb://192.168.2.152:27017';

const insert = async (db, val) => {
  var myStudent = { name: 'shashi', author: 'shashi' };
  const x =  await db.collection('article').insertOne(myStudent);
  return x;
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
    const result = await insert(db, val);
    return result;
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
};

// eslint-disable-next-line no-console
module.exports = create;
