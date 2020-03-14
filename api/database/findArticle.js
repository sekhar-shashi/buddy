const { MongoClient } = require('mongodb');

const uri = 'mongodb://192.168.2.152:27017';


const find = async (val) => {
  /**
   * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
   * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
   */
  const client = new MongoClient(uri);

  try {
    const mongoClient = await client.connect();
    // connect to DB
    const db = mongoClient.db('articles');

    // Make the appropriate DB calls
   const result = await db.collection('article').findOne(val);
       
   if (result) {
      console.log('result found ', result);
      return result;
    } else {
      console.log(`error in findOne`);
    }
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  } finally {
    await client.close();
  }
};

module.exports = find;
