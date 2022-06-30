const {MongoClient, ObjectID} = require('mongodb');


const mongoUser = encodeURIComponent('JohnHope');
const mongoPass = encodeURIComponent('kjpKtE5zwFPt7H2WFzQ4UENjxuDPvfQuKT3');

async function main() {

    const uri = `mongodb+srv://${mongoUser}:${mongoPass}@hopehacksdatabase.gzz69bj.mongodb.net/?retryWrites=true&w=majority`;


    const client = new MongoClient(uri);

    try {
        await client.connect();

        await listDatabases(client);
    }
    catch (e) {
        console.error(e);

    } finally {
        await client.close();
    };
};

main().catch(console.error);

async function listDatabases(client){
    const databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => {
        console.log(`- ${db.name}`);
    });
};
