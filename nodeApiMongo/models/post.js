// Importing mongoose
const mongoose = require("mongoose");

// Creating a simple schema 
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        requiere: "Title is required",
        minlength: 4,
        maxlength: 150
    },
    body: {
        type: String,
        requiere: "Body is required",
        minlength: 4,
        maxlength: 2000
    }
});

// Exporting schema
module.exports = mongoose.model("Post", postSchema);