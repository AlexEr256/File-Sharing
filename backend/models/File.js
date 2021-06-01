const mongoose = require('mongoose');

const {Schema, model} = mongoose;

let file = new Schema({
    _id: { type: mongoose.Schema.Types.ObjectId },
    originalname: {
        type: String,
        required:true
    },
    encoding: {
        type: String,
        required:true
    },
    mimetype: {
        type: String,
        required:true
    },
    destination: {
        type: String,
        required:true
    },
    filename: {
        type: String,
        required:true
    },
    size: {
        type: Number,
        required:true
    },
},{
    timestamps:true,
   
})

module.exports = model('File', file);