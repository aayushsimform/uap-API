const mongoose = require('mongoose');
//Photos model
const Photoschema = mongoose.Schema({
    album_id:{
        type : mongoose.Schema.ObjectId,
         ref : "Album"
    },
    user_id:{
        type : mongoose.Schema.ObjectId,
        ref : "Users"
    },
    name:{
        type : String,
        required : true
    },
    image_url :{
        type : String,
        required : true
    }
},{timestamps : true});

module.exports = mongoose.model('Photos',Photoschema);