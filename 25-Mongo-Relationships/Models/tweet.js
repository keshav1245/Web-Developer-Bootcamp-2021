const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/relationships', {useNewUrlParser : true, useUnifiedTopology: true})
.then(() =>{
    console.log('MongoDB Connection via Mongoose open !')
})
.catch(err =>{
    console.error('Error connecting to MongoDB')
    console.error(err)
})


const userSchema = new mongoose.Schema({
    username: String,
    age : Number
})

const tweetSchema = new mongoose.Schema({
    text : String,
    like : Number,
    user : {type : mongoose.Schema.Types.ObjectId, ref : 'User'}
})

const User = mongoose.model('User', userSchema)
const Tweet = mongoose.model('Tweet', tweetSchema)

// const makeTweet = async () =>{
//     // const user = new User({username : "Zukayu", age : 22})
//     const user = await User.findOne({username : "Zukayu"})
//     const t2 = new Tweet({text : "New tweet bombs away", like : 1245})
//     t2.user = user;
//     // user.save()
//     t2.save()

// }

// makeTweet()

const findTweet = async () =>{
    const t = await Tweet.find({}).populate('user', 'username')
    console.log(t)
}

findTweet()