const mongoose = require('mongoose');
const Review = require('./review');
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    url : String,
    filename : String
})

ImageSchema.virtual('thumbnail').get(function(){
    return this.url.replace('/upload','/upload/w_200');
})
const campgroundSchema = new Schema({
    title : String,
    images : [
        ImageSchema
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