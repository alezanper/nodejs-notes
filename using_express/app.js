const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("What's up from express")
});

app.listen(9090);