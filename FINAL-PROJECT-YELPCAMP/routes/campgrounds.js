const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync');
const Campground = require('../models/campground')
const {isLoggedIn, isAuthor, validateCampground }= require('../middleware');


router.get('/',catchAsync(async(req, res)=>{
    const campgrounds = await Campground.find({})
    res.render('campgrounds/index', {campgrounds})
}))

router.post('/', isLoggedIn ,validateCampground, catchAsync(async(req, res, next)=>{
    // try{
        // console.log(req.body)
        // if(!req.body.campground) throw new ExpressError("Invalid Campground Data", 400);

        const camp = new Campground(req.body.campground);
        camp.author = req.user._id;
        await camp.save();
        req.flash('success',"New Campground Created Successfully !")
        res.redirect('/campgrounds/'+camp._id)
    // }catch(e){
    //     next(e)
    // }
}))

router.get('/new', isLoggedIn, (req, res)=>{
    res.render('campgrounds/new')
})

router.get('/:id/edit', isLoggedIn, isAuthor ,catchAsync(async (req, res)=>{
    const {id} = req.params;
    const campground = await Campground.findById(id);
    if(!campground){
        req.flash('error', 'Campground not found')
        return res.redirect('/campgrounds')
    }
    res.render('campgrounds/edit', {campground})
}))

router.put('/:id', isLoggedIn, isAuthor ,validateCampground, catchAsync(async(req, res)=>{
    const {id} = req.params;
    const campground = await Campground.findByIdAndUpdate(id, req.body.campground, {new : true});
    req.flash('success',"Campground Updated Successfully !")
    res.render('campgrounds/show', {campground})
}))

router.delete('/:id', isLoggedIn, isAuthor, catchAsync(async(req, res)=>{
    const {id} = req.params;
    const campground = await Campground.findByIdAndDelete(id);
    req.flash('success',"Campground Deleted Successfully !")
    res.redirect('/campgrounds')
}))

router.get('/:id',catchAsync(async(req, res)=>{
    const {id} = req.params;
    const campground = await Campground.findById(id).populate('reviews').populate('author') ;
    // console.log(campground);
    if(!campground) {
        req.flash('error', 'Campground not found!')
        return res.redirect('/campgrounds')
    }
    res.render('campgrounds/show', {campground})
}))

module.exports = router;