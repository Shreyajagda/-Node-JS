<<<<<<< HEAD
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/project-1')

const db = mongoose.connection;

db.once("open",(err)=>{
    err ? console.log() : console.log("database connected");
    
    
})

=======
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/project-1')

const db = mongoose.connection;

db.once("open",(err)=>{
    err ? console.log() : console.log("database connected");
    
    
})

>>>>>>> 15e51b8acef279cba758795405fe4e8abb8d5a92
module.exports = db ;