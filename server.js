const MongoClient = require('mongodb').MongoClient;
const cors = require("cors")
const bodyParser = require("body-parser")
const fetch = require('node-fetch');
// starts express server
const express = require('express');
const { request } = require('https');
const app = express();
const port = process.env.PORT|| 8080;

const thirdPartyOptions = {
headers: {
        'Content-Type': 'application/json',
        "access-control-allow-origin": "*",
        'Accept': 'application/json',
        "X-API-KEY" : process.env.APIKEY
    }
}


async function searchPerson(name, juris) {
        fetch(`https://v3.openstates.org/people?jurisdiction=${juris}&name=${name}&page=1&per_page=10`, thirdPartyOptions)
        .then(res => res.json())
        .then(data => {
            res.send(data);
        })
}

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(port, () => console.log(`Listening on port ${port}`));

MongoClient.connect(process.env.MONGODB_URI , { useNewUrlParser: true }, (err, client) => {
    console.log("Connected to database :D :D :D :D ");
    const db = client.db('hopehacks');
    const collection = db.collection('listings');
   
    app.get('/data', (req, res) => {
        collection.find().toArray()
        .then (docs => {
            res.send(docs);
        });
    });
});




app.get('/personSearch', (req, res) => {
    const obj = req.query
    fetch (`https://v3.openstates.org/people?jurisdiction=${obj.juris}&name=${obj.name}&page=1&per_page=10`, thirdPartyOptions)
    .then (res => res.json())
    .then (data => {
        console.log(data)
        res.send(data);
    })
});
