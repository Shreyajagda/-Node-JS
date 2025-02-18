const express = require("express");
const port = 3443;
const app = express();
const db = require("./config/db");

app.set("view engine", "ejs");
app.use(express.urlencoded());
app.use("/",require("./route/route"))
app.use("/addData",require("./route/route"))
app.use("/deleteData",require("./route/route"))



app.listen(port, (err) => {
    err ? console.log(err) : console.log("Server Started on port" + port);
})
