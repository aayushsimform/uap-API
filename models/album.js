const mongoose = require('mongoose');
//Album model
const Albumschema = new mongoose.Schema({
    user_id:{
        type : mongoose.Types.ObjectId,
         ref : "Users",
    },
    name:{
        type : String,
        required : true
    },
    
},{timestamps : true});

module.exports = mongoose.model('Album',Albumschema);