const express = require("express");
const port = 2332;

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded())

let todo = [];

app.get("/", (req, res) => {
    res.render("index", { todo });
})

app.post("/addData", (req, res) => {
    req.body.id = todo.length + 1;
    todo.push(req.body);
    res.redirect("/")
})

app.get("/deleteData", (req, res) => {
    let todoData = todo.filter((item) => item.id != req.query.id);
    todo = todoData;
    res.redirect("/");

})
app.get("/editData/:id", (req, res) => {
    let data = todo.find((item) => item.id == req.params.id);
    res.render("edit", { data });
})
app.post("/updateData", (req, res) => {
    todo.forEach((item) => {
        if (item.name = req.body.task) {
        } else {
            item
        }
    })
    res.redirect("/");

})
app.listen(port, (err) => {
    err ? console.log(err) : console.log("Server Started on port" + port);
})