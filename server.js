const MongoClient = require('mongodb').MongoClient;
const cors = require("cors")
const bodyParser = require("body-parser")
const fetch = require('node-fetch');


// starts express server
const express = require('express');
const app = express();
const port = process.env.PORT|| 8080;

const openStatesAPIOptions = {
headers: {
        'Content-Type': 'application/json',
        "access-control-allow-origin": "*",
        'Accept': 'application/json',
        "X-API-KEY" : process.env.openStatesKey
    }
}

const proPublicAPIOptions = {
    headers: {
            'Content-Type': 'application/json',
            "access-control-allow-origin": "*",
            'Accept': 'application/json',
            "X-API-KEY" : process.env.proPublicKey
        }
}
        
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(port, () => console.log(`Listening on port ${port}`));

MongoClient.connect(process.env.MONGODB_URI , { useNewUrlParser: true }, (err, client) => {
    console.log("Connected to database :D :D :D :D ");
    const db = client.db('hopehacks');
    const collection = db.collection('listings');
    const contactsCollection = db.collection('contacts');
   
    app.get('/data', (req, res) => {
        collection.find().toArray()
        .then (docs => {
            res.send(docs);
        });
    });

    app.post('/contacts', (req, res) => {
        db.collection('contacts').insertOne(req.body)
        console.log(req.body);
    });

    app.get('/contacts', (req, res) => {
        contactsCollection.find().toArray()
        .then (docs => {
            res.send(docs);
        });

});


app.get('/personSearch', (req, res) => {
    const obj = req.query
    console.log(obj);
    fetch (`https://v3.openstates.org/people?jurisdiction=${obj.juris}&name=${obj.name}&page=${obj.page}&per_page=10`, openStatesAPIOptions)
    .then (res => res.json())
    .then (data => {
        console.log(data)
        res.send(data);
    })
});



app.get('/personSearch', (req, res) => {
    const obj = req.query
    console.log(obj);
    fetch (`https://v3.openstates.org/people?jurisdiction=${obj.juris}&name=${obj.name}&page=${obj.page}&per_page=10`, openStatesAPIOptions)
    .then (res => res.json())
    .then (data => {
        console.log(data)
        res.send(data);
    })
});


app.get('/billSearch', (req, res) => {
    const obj = req.query
    fetch(`https://api.propublica.org/congress/v1/bills/search.json?query=${obj.bill}`, proPublicAPIOptions)
    .then (res => res.json())
    .then (data => {
        console.log(data)
        res.send(data);
    })
})
