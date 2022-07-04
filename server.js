const MongoClient = require('mongodb').MongoClient;
const cors = require("cors")
// starts express server
const express = require('express');
const app = express();
const port = process.env.PORT|| 8080;

app.use(cors());

app.listen(port, () => console.log(`Listening on port ${port}`));

MongoClient.connect(process.env.MONGODB_URI || "mongodb+srv://nerd:AwwTlVLJg1QVUlqg@rude-buster.g9uqnpz.mongodb.net/?retryWrites=true&w=majority" , { useNewUrlParser: true }, (err, client) => {
    console.log("Connected to database :D :D :D :D ");
    const db = client.db('sample_training');
    const collection = db.collection('routes');
   
    app.get('/', (req, res) => {
        collection.find().toArray()
        .then (docs => {
            res.send(docs);
        });
    });
});