const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.get("/", (req, res, next) => {
    res.status(200).sendFile(path.join(__dirname + '/index.html'));
});

app.get("/movies", (req, res, next) => {
    res.status(200).sendFile(path.join(__dirname + '/movies.html'));
});

app.listen(port);
console.log("Server listening at http://localhost:3000");