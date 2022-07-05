const MongoClient = require('mongodb').MongoClient;
const cors = require("cors")
const bodyParser = require("body-parser")

// starts express server
const express = require('express');
const app = express();
const port = process.env.PORT|| 8080;

const thirdPartyOptions = {
headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        "X-API-KEY" : process.env.APIKEY
    }
}


// async function searchPerson(name, jurs) {
//     try {
//         const data = await fetch(`https://v3.openstates.org/people?jurisdiction=${jurs}&name=${name}&page=1&per_page=10`, thirdPartyOptions);
//         const json = await data.json();
//         console.log(json);
//         res.send(json);
//     } catch (error) {
//         console.log(error);
//     }
// }

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
    console.log(req.body);
    console.log(req.query);
    console.log(req.params);
    console.log(req.headers);
    res.send("Hello World");
});

app.post("/personSearch", (req, res) => {
    console.log(req.body);
    console.log(req.query);
    console.log(req.params);
    console.log(req.headers);
    res.end();
});