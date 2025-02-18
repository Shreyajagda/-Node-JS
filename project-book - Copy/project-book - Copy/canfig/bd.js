const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/node1')

const db = mongoose.connection;

db.once("open",(err)=>{
    err ? console.log() : console.log("database connected");
    
    
})

module.exports = db ;