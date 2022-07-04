const cors = require("cors")
const express = require('express');
const mongoose = require('mongoose');


const app = express();
const PORT = process.env.PORT || 8080;
app.use(cors());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/hopehacks", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
    console.log("connected to mongo instance :D :D :D :D :D ");
});


app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
