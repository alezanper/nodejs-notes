const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

dotenv.config();

const port = process.env.PORT || 8080;

// Mongodb configuration
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(()=> console.log("DB connected"));
mongoose.connection.on("error", err => {
    console.log(`DB Connection error: ${err.message}`);
});

// Bring routes
const postRoutes = require('./routes/post');

//const myMiddleware = (req, res, next) => {
//    console.log("my middleware");
//    next();
//};

// Middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use("/", postRoutes);

//app.use(myMiddleware);

app.listen(port, () => {
    console.log(`A nodejs api is listening on port: ${port}`);
});