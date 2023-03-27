const mongoose = require('mongoose');
//User model
const Userschema = mongoose.Schema({
    first_name:{
        type : String,
        required : true
    },
    last_name:{
        type : String,
        required : true
    },
    phone_number:{
        type : Date,
        default : Date.now
    }
});

module.exports = mongoose.model('Users',Userschema);