const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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

userSchema.statics.signInWithUsernameAndPassword = async function(username, password){
    const user = await this.findOne({username}) // this here, refers to particular model schema
    if(!user){
        return false;
    }
    const validatePass = await bcrypt.compare(password, user.password)
    if(validatePass){
        return user;
    }else{
        return false
    }
}

userSchema.pre('save', async function(next){
    // this => refers to particular document
    if(!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 12)
    next()
})

module.exports = mongoose.model('User', userSchema);