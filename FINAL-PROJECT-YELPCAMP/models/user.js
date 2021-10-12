const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');


const UserSchema = new Schema({
    email : {
        type : 'string', 
        required : true,
        unique : true
    }
})

UserSchema.plugin(passportLocalMongoose); // This will add username and password field to UserSchema and make sure that
                                          // usernames are uniques.


module.exports = mongoose.model('User', UserSchema); 