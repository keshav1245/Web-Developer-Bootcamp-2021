const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync');
const ExpressError = require('../utils/ExpressError');
const {campgroundSchema} = require('../schemas');
const Campground = require('../models/campground')

const validateCampground = (req, res, next)=>{
    
    const {error} = campgroundSchema.validate(req.body)
    if(error){
        const msg = error.details.map(el => el.message).join(',')
        throw new ExpressError(msg, 400)
    }else{ 
        next()
    }
    
};

router.get('/',catchAsync(async(req, res)=>{
    const campgrounds = await Campground.find({})
    res.render('campgrounds/index', {campgrounds})
}))

router.post('/',validateCampground, catchAsync(async(req, res, next)=>{
    // try{
        // console.log(req.body)
        // if(!req.body.campground) throw new ExpressError("Invalid Campground Data", 400);

        const camp = await Campground.create(req.body.campground)
        res.redirect('/campgrounds/'+camp._id)
    // }catch(e){
    //     next(e)
    // }
}))

router.get('/new', (req, res)=>{
    res.render('campgrounds/new')
})

router.get('/:id/edit',catchAsync(async (req, res)=>{
    const {id} = req.params;
    const campground = await Campground.findById(id);
    res.render('campgrounds/edit', {campground})
}))

router.put('/:id',validateCampground, catchAsync(async(req, res)=>{
    const {id} = req.params;
    const campground = await Campground.findByIdAndUpdate(id, req.body.campground, {new : true});
    res.render('campgrounds/show', {campground})
}))

router.delete('/:id',catchAsync(async(req, res)=>{
    const {id} = req.params;
    const campground = await Campground.findByIdAndDelete(id);
    res.redirect('/campgrounds')
}))

router.get('/:id',catchAsync(async(req, res)=>{
    const {id} = req.params;
    const campground = await Campground.findById(id).populate('reviews');
    res.render('campgrounds/show', {campground})
}))

module.exports = router;