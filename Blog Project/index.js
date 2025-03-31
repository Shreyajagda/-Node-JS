const express = require("express");
const port = 5100;

const app = express();
const db = require("./config/database");
const path = require("path");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

const cookie = require('cookie-parser')
app.use('/uploads',express.static(path.join(__dirname,"uploads")))
app.use('/',express.static(path.join(__dirname, "public")));
app.use(cookie())
    
app.use("/", require("./routes"));

app.listen(port, (err) => {
    err ? console.log("Error") : console.log(`Server successfully start on port ${port}`)
});
