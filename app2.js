// connects to mongoDB and inserts a document
const MongoClient = require('mongodb').MongoClient;
const mongoUser = encodeURIComponent('JohnHope');
const mongoPass = encodeURIComponent('kjpKtE5zwFPt7H2WFzQ4UENjxuDPvfQuKT3');
const uri = `mongodb+srv://${mongoUser}:${mongoPass}@hopehacksdatabase.gzz69bj.mongodb.net/?retryWrites=true&w=majority`;
const cors = require("cors")
// starts express server
const express = require('express');
const app = express();
const port = 8080;

app.use(cors());

app.listen(port, () => console.log(`Listening on port ${port}`));

MongoClient.connect(uri, { useNewUrlParser: true }, (err, client) => {
    console.log("Connected to database");
    const db = client.db('hopehacks');
    const collection = db.collection('listings');
   
    app.get('/', (req, res) => {
        collection.find().toArray()
        .then (docs => {
            res.send(docs);
        }
        )
    }    
    );
})
