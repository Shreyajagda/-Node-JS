const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
    fname: {
        type: String,
    },

    lname: {
        type: String,
        required: false
    },

    password: {
        type: String,
        required: false
    },

    email: {
        type: String,
        required: false
    },
    
    message: {
        type: String,
        required: false
    }
});

const blog = mongoose.model("blogPr", adminSchema);

module.exports = blog