const express = require("express");
const app = express();
const morgan = require("morgan");
const port = 8080;

// Bring routes
const {getPosts} = require('./routes/post');

const myMiddleware = (req, res, next) => {
    console.log("my middleware");
    next();
};

// Middleware
app.use(morgan("dev"));
app.use(myMiddleware);

app.get("/", getPosts);

app.listen(port, () => {
    console.log(`A nodejs api is listening on port: ${port}`);
});