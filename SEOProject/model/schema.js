const { name } = require("ejs");
const mongoose = require("mongoose");
const { type } = require("os");
const Schema = mongoose.Schema({
    name : {
        type:String,
        required:true,
    },
}) 

const schema = mongoose.model("data",Schema);
module.exports = schema;
