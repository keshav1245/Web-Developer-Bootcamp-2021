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

    first : String,
    last : String,
    addresses : [
        {
            // _id : {_id : false},
            street : String,
            city : String, 
            state : String,
            country : String
        }
    ]

})

const User = mongoose.model('User', userSchema)

const makeUser = async () => {
    const u = new User({
        first : "Keshav part 2",
        last : 'Tangri'
    })

    // u.addresses.push({ 
    //     street : "1245 15 B, Tangri Rd",
    //     city : "Chandigarh",
    //     stte : "UT",
    //     country : "India"
    // })
    addAddress(u._id)
    const res = await u.save();
    console.log(res)

}


const addAddress = async (id) => {
    const user = await User.findById(id);
    user.addresses.push({
        street : "7009 15 B, Tangri Rd",
        city : "Chandigarh",
        stte : "UT",
        country : "India"
    })
    const res = await user.save();
    console.log(res)
}

makeUser()