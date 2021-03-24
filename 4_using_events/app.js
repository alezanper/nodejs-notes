// Handling events 
// This samll program is going to check a directory for changes on a file

const fs = require("fs");

const fileName = "target.txt";

// watch method checks for changes in file
fs.watch(fileName, () => {
    fs.readFile(fileName, (err, data) => {
        if(err){
            console.log(err);
        }
        console.log(data.toString())
    });
});

console.log("Node js Async programming ... ?")