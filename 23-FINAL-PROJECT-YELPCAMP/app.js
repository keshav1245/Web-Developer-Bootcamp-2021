const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const path = require('path');

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

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'))


app.get('/',(req, res)=>{
    res.render("home")
})

app.get('/campgrounds',async(req, res)=>{
    const campgrounds = await Campground.find({})
    res.render('campgrounds/index', {campgrounds})
})

app.post('/campgrounds',async(req, res)=>{
    // console.log(req.body)
    const camp = await Campground.create(req.body.campground)
    res.redirect('/campgrounds/'+camp._id)
})

app.get('/campgrounds/new', (req, res)=>{
    res.render('campgrounds/new')
})

app.get('/campgrounds/:id/edit', async (req, res)=>{
    const {id} = req.params;
    const campground = await Campground.findById(id);
    res.render('campgrounds/edit', {campground})
})

app.put('/campgrounds/:id',async(req, res)=>{
    const {id} = req.params;
    const campground = await Campground.findByIdAndUpdate(id, req.body.campground, {new : true});
    res.render('campgrounds/show', {campground})
})

app.delete('/campgrounds/:id',async(req, res)=>{
    const {id} = req.params;
    const campground = await Campground.findByIdAndDelete(id);
    res.redirect('/campgrounds')
})

app.get('/campgrounds/:id',async(req, res)=>{
    const {id} = req.params;
    const campground = await Campground.findById(id);
    res.render('campgrounds/show', {campground})
})

app.listen(3000, () => {
    console.log('Serving on Localhost:3000')
})