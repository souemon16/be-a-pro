const express = require('express');
const app = express();
const dotenv = require('dotenv');
const port = 3000;

const { MongoClient } = require('mongodb');
dotenv.config({ path: './config.env' });
require('./db/connection');

app.get('/', (req, res) => {
    res.send("Hello World")
});

app.get('/about', (req, res) => {
    res.send("Hello World from about")
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})