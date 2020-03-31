const fs = require("fs");
const fileName = "target.txt";

// Independent functions
const errHandler = err => console.log(err);
const dataHandler = data => console.log(data.toString());

// Use functions depending on tasks
fs.readFile(fileName, (err, data) => {
    if (err) errHandler(err);
    dataHandler(data);
});