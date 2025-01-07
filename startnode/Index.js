const http = require ("http");
const port = 2222;

const porthandler = (req,res)=>{
    res.write("<h1> Server Started </h1>");
    res.end();
}
const server = http.createServer(porthandler);

server.listen(port,(err) =>{
    err ? console.log(err) : console.log ("Server Started on port : " + port)
});