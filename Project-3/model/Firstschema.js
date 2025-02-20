<<<<<<< HEAD
const mongoose = require("mongoose");

const schema = mongoose.Schema({
    bookname: {
        type: String,
        required: true,
    },
    authername: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    sold: { // Corrected the typo from 'sould' to 'sold'
        type: Number,
        required: true,
    },
    URL: {
        type: String,
        required: true, // This ensures that `URL` must be provided
    },
    
});

const firstSchema = mongoose.model("Data3", schema);

module.exports = firstSchema;
=======
const mongoose = require("mongoose");

const schema = mongoose.Schema({
    bookname: {
        type: String,
        required: true,
    },
    authername: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    sold: { // Corrected the typo from 'sould' to 'sold'
        type: Number,
        required: true,
    },
    URL: {
        type: String,
        required: true, // This ensures that `URL` must be provided
    },
    
});

const firstSchema = mongoose.model("Data3", schema);

module.exports = firstSchema;
>>>>>>> 15e51b8acef279cba758795405fe4e8abb8d5a92
