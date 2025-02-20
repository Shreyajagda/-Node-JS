const mongoose = require("mongoose");

const Schema =  mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    city:{
        type:String,
        required:true,
    },

})


const schema = mongoose.model("Data",Schema)

module.exports = schema;
