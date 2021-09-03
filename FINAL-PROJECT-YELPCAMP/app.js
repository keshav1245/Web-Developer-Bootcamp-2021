const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const path = require('path');
const {campgroundSchema} = require('./schemas');
const ejsMate = require('ejs-mate');
const catchAsync = require('./utils/catchAsync');
const ExpressError = require('./utils/ExpressError');

const Campground = require('./models/campground')

mongoose.connect('mongodb://localhost:27017/yelp-camp',{
    useNewUrlParser : true,
    useUnifiedTopology : true
})

const db = mongoose.connection;
db.on('error', console.error.bind(console, "Connection Error"))
db.once("open", function() {
    console.log("Connection Successful");
})

const app = express();
app.engine('ejs', ejsMate)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'))

const validateCampground = (req, res, next)=>{
    
    const {error} = campgroundSchema.validate(req.body)
    if(error){
        const msg = error.details.map(el => el.message).join(',')
        throw new ExpressError(msg, 400)
    }else{ 
        next()
    }
    
};


app.get('/',(req, res)=>{
    res.render("home")
})

app.get('/campgrounds',catchAsync(async(req, res)=>{
    const campgrounds = await Campground.find({})
    res.render('campgrounds/index', {campgrounds})
}))

app.post('/campgrounds',validateCampground, catchAsync(async(req, res, next)=>{
    // try{
        // console.log(req.body)
        // if(!req.body.campground) throw new ExpressError("Invalid Campground Data", 400);

        const camp = await Campground.create(req.body.campground)
        res.redirect('/campgrounds/'+camp._id)
    // }catch(e){
    //     next(e)
    // }
}))

app.get('/campgrounds/new', (req, res)=>{
    res.render('campgrounds/new')
})

app.get('/campgrounds/:id/edit',catchAsync(async (req, res)=>{
    const {id} = req.params;
    const campground = await Campground.findById(id);
    res.render('campgrounds/edit', {campground})
}))

app.put('/campgrounds/:id',validateCampground, catchAsync(async(req, res)=>{
    const {id} = req.params;
    const campground = await Campground.findByIdAndUpdate(id, req.body.campground, {new : true});
    res.render('campgrounds/show', {campground})
}))

app.delete('/campgrounds/:id',catchAsync(async(req, res)=>{
    const {id} = req.params;
    const campground = await Campground.findByIdAndDelete(id);
    res.redirect('/campgrounds')
}))

app.get('/campgrounds/:id',catchAsync(async(req, res)=>{
    const {id} = req.params;
    const campground = await Campground.findById(id);
    res.render('campgrounds/show', {campground})
}))

app.all('*', (req,res,next)=>{
    next(new ExpressError('Page Not Found !!', 404))
})

app.use((err, req, res, next)=>{

    const {status = 500} = err;
    if(!err.message) err.message = "Something went Wrong!"
    res.status(status)
    res.render('error', {err})
})

app.listen(3000, () => {
    console.log('Serving on Localhost:3000')
})