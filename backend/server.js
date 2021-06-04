const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const dbConfig = require("./config.js");
var connection = mysql.createPool({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});

module.exports = connection;



app.post('/add', (req, res) => {
    const name = req.body.name;

    connection.query('INSERT INTO watched (name) VALUES (?)', [name], (err, result)=> {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
});

// simple route
app.get("/", (req, res) => {

  res.json({ message: "Welcome to myKdrama!" });

});



// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});