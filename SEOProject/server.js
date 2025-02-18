const express = require("express");
const port = 2222;
const path = require("path")

const app = express();

app.set("view engine", 'ejs')
app.use(express.urlencoded())
app.use(express.static(path.join(__dirname,"public")));

app.use("/",require("./routes/route"))

app.listen(port,(err)=>{
    err ? console.log(err) : console.log("Server started on port "+ port)
})

