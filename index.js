const { MongoClient, ServerApiVersion, Collection } = require('mongodb');
const uri = "mongodb+srv://guizin1204:mypassword@first-cluster-ever.cnado.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
      await client.connect();
      // database and collection code goes here
      const db = client.db("sample_guides");
      const coll = db.collection("planets");
      // find code goes here
      const cursor = coll.find()
      // iterate code goes here
      await cursor.forEach(console.log)
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  run().catch(console.dir);