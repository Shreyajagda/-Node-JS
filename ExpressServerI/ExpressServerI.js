const express = require ("express");
const port = 1018;
const app = express();
app.get("/",(req,res)=>{
    res.write("<h1> Server Started </h1>");
    res.end();

})
app.listen(port, (err)=>{
    err ? console.log(err) : console.log("Server started on port:" + port);
})





