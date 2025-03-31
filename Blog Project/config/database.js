const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/blogProject");

const db = mongoose.connection

db.once("open", (err) => {
    err ? console.log("Error occured") : console.log("Database start successfully !")
});

