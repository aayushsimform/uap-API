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
        type : Number,
        required : true
    }
});

module.exports = mongoose.model('Users',Userschema);