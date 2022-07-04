// connects to mongoDB and inserts a document
const MongoClient = require('mongodb').MongoClient;
const cors = require("cors")
const express = require('express');


const app = express();
const port = 8080;

app.use(cors());
app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${port}`));

MongoClient.connect(process.env.MONGODB_URI, { useNewUrlParser: true }, (err, client) => {
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
