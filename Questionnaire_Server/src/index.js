const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const events = require('./events');

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'diamondDgreat16',
    database : 'Questionnaire'
});

connection.connect();

const port = process.env.PORT || 8080;

const app = express()
    .use(cors())
    .use(express.json())
    .use(events(connection));

app.listen(port, () => {
    console.log(`Express server listening on port ${port}`);
});