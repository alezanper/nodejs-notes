// importing express
const express = require('express');
const app = express();

// Creating a simple server 
app.get('/', (req, res) => {
    res.send("What's up from express")
});

// Adding port to listen to
app.listen(9090);