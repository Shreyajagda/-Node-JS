const express = require("express");
const port = 1568;
const app = express();
const path = require("path");
const db = require("../Project-3/config/db"); 
const Schema = require("../Project-3/model/Firstschema"); 

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static(path.join(__dirname, "public")));


app.get("/", (req, res) => {
    Schema.find({})
        .then((data) => res.render("index", { data }))
});

app.post("/addData", async (req, res) => {
    console.log(req.body); 
    await Schema.create(req.body)
        .then(() => res.redirect("/"))
});

app.get("/deleteData", (req, res) => {
    Schema.findByIdAndDelete(req.query.id)
        .then(() => res.redirect("/"))
});

app.get("/editData/:id", async(req , res)=>{
    let data = await Schema.findById(req.params.id);
    res.render("edit",{data});
  })

app.post("/updateData", (req, res) => {
    Schema.findByIdAndUpdate(req.body.id, req.body)
        .then(() => res.redirect("/"))
        
});


app.listen(port,(err)=>{
    err ? console.log(err) : console.log("Server is running on port"+ port);
})
