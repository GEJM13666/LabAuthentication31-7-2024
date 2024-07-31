const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({

    user_name: { type: String, required: true }, 

    password: { type: String, required: true }, 

    name: { type: String, required: false }, 

    role: { type: String, required: false },

});


module.exports = mongoose.model('User', usersSchema);