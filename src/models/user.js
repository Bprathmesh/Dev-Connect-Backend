const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        // required: true we can use required to ensure it is required 
    },
    lastName: {
        type: String,
        // required: true
    },
    emailId: {
        type: String,
        // required: true
    },
    password: {
        type: String,
        // required: true
    },
    age: {
        type: String
        
    },
    gender:{
        type: String
    }

});
const userModel = mongoose.model('User', userSchema);
module.exports = userModel;