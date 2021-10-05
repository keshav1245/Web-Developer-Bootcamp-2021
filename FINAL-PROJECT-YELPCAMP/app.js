const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const path = require('path');
const ejsMate = require('ejs-mate');
const ExpressError = require('./utils/ExpressError');


const campgrounds = require('./routes/campgrounds');
const reviews = require('./routes/reviews');

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


// VALIDATION MIDDLEWARES START


// VALIDATION MIDDLEWARES ENDS



app.get('/',(req, res)=>{
    res.render("home")
})





// CAMPGROUND ROUTES START

app.use('/campgrounds', campgrounds);

// CAMPGROUND ROUTES END



// REVIEW ROUTES START

app.use('/campgrounds/:id/reviews', reviews);

// REVIEW ROUTES END

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