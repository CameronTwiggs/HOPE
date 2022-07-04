// create an express app
const express = require('express');
const app = express();
const port = 3000;
const cors = require("cors")
// starts express server
app.use(cors());
app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/', (req, res) => {
    console.log("Hello World");
    res.send("Hello World");
});