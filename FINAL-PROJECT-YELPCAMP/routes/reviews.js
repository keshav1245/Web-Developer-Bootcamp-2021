const express = require('express');
const router = express.Router({mergeParams : true});
const catchAsync = require('../utils/catchAsync');
const ExpressError = require('../utils/ExpressError');
const Campground = require('../models/campground')
const Review = require('../models/review')
const {validateReview } = require('../middleware');


router.post('/',validateReview, catchAsync(async (req, res, next) => {
    const {id} = req.params;
    console.log(req.params)
    const camp = await Campground.findById(id);
    if(!camp){
        throw new ExpressError('ERROR 404 : Couldnt find Campground', 404)
    }

    const review = new Review(req.body.review)
    camp.reviews.push(review)
    await review.save()
    await camp.save()
    req.flash('success',"Review Added! !")
    res.redirect(`/campgrounds/${camp._id}`)

}))

router.delete('/:reviewId', catchAsync(async (req, res,next)=>{
    const {id, reviewId} = req.params;
    await Campground.findByIdAndUpdate(id, {$pull : {reviews : reviewId}} );
    await Review.findByIdAndDelete(reviewId)
    req.flash('success',"Review Deleted Successfully !")
    res.redirect(`/campgrounds/${id}`);
}))


module.exports = router