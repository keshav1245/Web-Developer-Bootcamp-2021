const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    username: {
        type: 'string',
        required: [true, "Username cannot be Blank"]
    },
    password: {
        type: 'string',
        required: [true, "Password cannot be Blank"]
    },

})

module.exports = mongoose.model('User', userSchema);