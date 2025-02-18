const express = require("express");
const port = 1568;
const app = express();
const path = require("path");
const db = require("../project-book/canfig/bd"); // Ensure this path is correct
const Schema = require("../project-book/model/firstSchema"); // Ensure the schema has the correct field names

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static(path.join(__dirname, "public")));

// Route to render home page with all data
app.get("/", (req, res) => {
    Schema.find({})
        .then((data) => res.render("index", { data }))
});

// Route to add new data
app.post("/addData", async (req, res) => {
    console.log(req.body); // Log the incoming form data for debugging
    await Schema.create(req.body)
        .then(() => res.redirect("/"))
});
// Route to delete data by ID
app.get("/deleteData", (req, res) => {
    Schema.findByIdAndDelete(req.query.id)
        .then(() => res.redirect("/"))
});

// Route to render the edit page with prefilled data
app.get("/editData/:id", async(req , res)=>{
    let data = await Schema.findById(req.params.id);
    res.render("edit",{data});
  })

// Route to update data by ID
app.post("/updateData", (req, res) => {
    Schema.findByIdAndUpdate(req.body.id, req.body)
        .then(() => res.redirect("/"))
        
});


app.listen(port,(err)=>{
    err ? console.log(err) : console.log("Server is running on port"+ port);
})
