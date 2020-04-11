const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Spacedestructor:A!pFXt8Q2Y4KnLJ@cluster0-nauz5.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("Spacedestructor-Only").collection("Phantasy-Empire");
  // perform actions on the collection object
  client.close();
});
