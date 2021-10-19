const Campground = require('../models/campground')

module.exports.index = async(req, res)=>{
    const campgrounds = await Campground.find({})
    res.render('campgrounds/index', {campgrounds})
}

module.exports.renderNewForm = (req, res)=>{
    res.render('campgrounds/new')
}

module.exports.createCampground = async(req, res, next)=>{
    // try{
        // console.log(req.body)
        // if(!req.body.campground) throw new ExpressError("Invalid Campground Data", 400);
        const camp = new Campground(req.body.campground);
        camp.images = req.files.map(f => ({url: f.path, filename : f.filename}))
        camp.author = req.user._id;
        await camp.save();
        console.log(camp)
        req.flash('success',"New Campground Created Successfully !")
        res.redirect('/campgrounds/'+camp._id)
    // }catch(e){
    //     next(e)
    // }
}

module.exports.showCampground = async(req, res)=>{
    const {id} = req.params;
    const campground = await Campground.findById(id).populate({
        path : 'reviews',
        populate : {
            path : 'author'
        }
    }).populate('author') ;
    // console.log(campground);
    if(!campground) {
        req.flash('error', 'Campground not found!')
        return res.redirect('/campgrounds')
    }
    res.render('campgrounds/show', {campground})
}

module.exports.renderEditForm = async (req, res)=>{
    const {id} = req.params;
    const campground = await Campground.findById(id);
    if(!campground){
        req.flash('error', 'Campground not found')
        return res.redirect('/campgrounds')
    }
    res.render('campgrounds/edit', {campground})
}

module.exports.updateCampground = async(req, res)=>{
    const {id} = req.params;
    const campground = await Campground.findByIdAndUpdate(id, req.body.campground, {new : true});
    const imgs = req.files.map(f => ({url: f.path, filename : f.filename}));
    campground.images.push(...imgs)
    await campground.save();
    req.flash('success',"Campground Updated Successfully !")
    res.render('campgrounds/show', {campground})
}

module.exports.destroy = async(req, res)=>{
    const {id} = req.params;
    const campground = await Campground.findByIdAndDelete(id);
    req.flash('success',"Campground Deleted Successfully !")
    res.redirect('/campgrounds')
}