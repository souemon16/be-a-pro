const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser')
const port = process.env.PORT || 5000;

const { MongoClient } = require('mongodb');
dotenv.config({ path: './config.env' });
require('./db/connection');

app.use(cookieParser());
app.use(express.json());
app.use(require('./router/auth'));

if(process.env.NODE_ENV == "production"){
    app.use(express.static("client/build"))
}

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
