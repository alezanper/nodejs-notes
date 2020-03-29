const fs = require("fs");

const fileName = "target.txt";

fs.watch(fileName, () => {
    fs.readFile(fileName, (err, data) => {
        if(err){
            console.log(err);
        }
        console.log(data.toString())
    });
});

console.log("Node js Async programming ... ?")