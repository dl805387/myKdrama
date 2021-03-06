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


// puts the user into the database
app.post('/addUser', (req, res) => {
    const username = req.body.username;

    connection.query('INSERT INTO users (username) VALUES (?)', [username], (err, result)=> {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
});


// gets the userID based on username
app.post('/getUserID', (req, res) => {
    const username = req.body.username;

    connection.query("SELECT * FROM users WHERE username = ?", [username], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});


// add show to the watched table
app.post('/addWatched', (req, res) => {
    const userID = req.body.userID;
    const poster = req.body.poster;
    const name = req.body.name;
    const showID = req.body.showID;

    connection.query('INSERT INTO watched (userID, poster, name, showID) VALUES (?,?,?,?)', [userID, poster, name, showID], (err, result)=> {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
});


// see if the show already exists in the watched table
app.post('/existWatched', (req, res) => {
    const userID = req.body.userID;
    const showID = req.body.showID;

    connection.query('SELECT EXISTS(SELECT * from watched WHERE userID=? and showID=?)', [userID, showID], (err, result)=> {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
});


// add show to the watchlater table
app.post('/addWatchlater', (req, res) => {
    const userID = req.body.userID;
    const poster = req.body.poster;
    const name = req.body.name;
    const showID = req.body.showID;

    connection.query('INSERT INTO watchlater (userID, poster, name, showID) VALUES (?,?,?,?)', [userID, poster, name, showID], (err, result)=> {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
});


// see if the show already exists in the watchlater table
app.post('/existWatchlater', (req, res) => {
    const userID = req.body.userID;
    const showID = req.body.showID;

    connection.query('SELECT EXISTS(SELECT * from watchlater WHERE userID=? and showID=?)', [userID, showID], (err, result)=> {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
});


// get shows from watched table
app.post('/getWatched', (req, res) => {
    const userID = req.body.userID;

    connection.query("SELECT * FROM watched WHERE userID = ?", [userID], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});


// get shows from watchlater table
app.post('/getWatchlater', (req, res) => {
    const userID = req.body.userID;

    connection.query("SELECT * FROM watchlater WHERE userID = ?", [userID], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});


// delete show from watched
app.post('/deleteWatched', (req, res) => {
    const watchedID = req.body.watchedID;

    connection.query('DELETE FROM watched WHERE watchedID = ?', [watchedID], (err, result)=> {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
});


// delete show from watchlater
app.post('/deleteWatchlater', (req, res) => {
    const watchlaterID = req.body.watchlaterID;

    connection.query('DELETE FROM watchlater WHERE watchlaterID = ?', [watchlaterID], (err, result)=> {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
});



app.get("/", (req, res) => {

  res.json({ message: "Welcome to myKdrama!" });

});



// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});