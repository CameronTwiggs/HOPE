const {MongoClient, ObjectID} = require('mongodb');

const mongoUser = encodeURIComponent('JohnHope');
const mongoPass = encodeURIComponent('kjpKtE5zwFPt7H2WFzQ4UENjxuDPvfQuKT3');

let names = ['John', 'Joe', 'Jill', 'Jack', 'Jane'];

async function main() {

    const uri = `mongodb+srv://${mongoUser}:${mongoPass}@hopehacksdatabase.gzz69bj.mongodb.net/?retryWrites=true&w=majority`;


    const client = new MongoClient(uri);

    try {
        await client.connect();

        await findAllListingsByName(client, names);
    }
    catch (e) {
        console.error(e);

    } finally {
        await client.close();
    };
};

main().catch(console.error);

async function findAllListingsByName(client, array) {

    for(let i = 0; i < array.length; i++) {
        const query = {name: array[i]};
        
        const result = await client.db('hopehacks').collection('listings').findOne(query);
        
        if (result) {
            console.log(`Found listing with name: ${result.name}`);
            console.log(result);
        } else {
            console.log(`No listing found with name: ${result.name}`);
        };
    };
};

async function createMultipleStrings(client, strings) {
    const result = await client.db('hopehacks').collection('listings').insertMany(strings);

    console.log(`Inserted ${result.insertedCount} documents with the following id(s):`);

    console.log(result.insertedIds);
}

async function  createStrings(client, string){
    const result = await client.db('hopehacks').collection('listings').insertOne(string);

    console.log(`New id created: ${result.insertedId}`);
};

async function listDatabases(client){
    const databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => {
        console.log(`- ${db.name}`);
    });
};

