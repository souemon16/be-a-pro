const express = require('express');
const app = express();
const dotenv = require('dotenv');
const port = 3000;

const { MongoClient } = require('mongodb');
dotenv.config({ path: './config.env' });
require('./db/connection');

app.use(express.json());
app.use(require('./router/auth'));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
