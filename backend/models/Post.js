const mongoose = require('mongoose');
const shortid = require('shortid');
const {Schema, model} = mongoose;

let post = new Schema({
    files: [
       { type: Schema.Types.ObjectId, ref: 'File' }
    ],
    emailsTo: {
        type: [String],
        required:false
    },
    emailFrom: {
        type: String,
        required:false
    },
    message: {
        type: String,
        required:false
    },
    shortId:{
        type: String,
        default: shortid.generate
    },
    zipPath:{
        type:String,
        default:''
    }
},{
    timestamps:true
})

module.exports = model('Post', post);