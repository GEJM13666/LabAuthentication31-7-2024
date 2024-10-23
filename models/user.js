const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({

    user_name: { type: String, required: true }, 

    password: { type: String, required: true }, 

    name: { type: String, required: true }, 

    role: { type: String, required: true },

},{timestamps:true, versionKey:false});


module.exports = mongoose.model('User', usersSchema);