const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3000;

const { MongoClient } = require('mongodb');
const db = 'mongodb+srv://souravemon:findapro@cluster0.aoyvm.mongodb.net/findapro?retryWrites=true&w=majority';
mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false})
.then(() => {
    console.log("connection successful");
})
.catch((error) => {
    console.log("connection unsuccessful");
});

app.get('/', (req, res) => {
    res.send("Hello World")
});

app.get('/about', (req, res) => {
    res.send("Hello World from about")
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})