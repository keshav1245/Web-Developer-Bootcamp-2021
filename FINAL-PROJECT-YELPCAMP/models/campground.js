const mongoose = require('mongoose');
const Review = require('./review');
const Schema = mongoose.Schema;

const campgroundSchema = new Schema({
    title : String,
    images : [
        {
            url : String,
            filename : String
        }
    ],
    price : Number,
    description : String,
    location : String,
    author : {
        type : Schema.Types.ObjectId, 
        ref : 'User'
    },
    reviews : [
        {
            type : Schema.Types.ObjectId, 
            ref : 'Review'
        }
    ]
})

// Middleware for deleting reviews if campground is deleted

campgroundSchema.post('findOneAndDelete', async function(document){
    if(document){
        await Review.remove(
            {
                _id : {
                    $in : document.reviews
                }
            }
        )
    }
} )

module.exports = mongoose.model('Campground', campgroundSchema);