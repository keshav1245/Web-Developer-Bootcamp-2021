const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const path = require('path');
const ejsMate = require('ejs-mate');
const session = require('express-session');
const flash = require('connect-flash');
const ExpressError = require('./utils/ExpressError');
const passport = require('passport');
const passportLocal = require('passport-local');
const User = require('./models/user')

if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}


const campgroundRoutes = require('./routes/campgrounds');
const reviewRoutes = require('./routes/reviews');
const userRoutes = require('./routes/users');

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
app.use(express.static(path.join(__dirname, 'public')))

const sessionConfig = {
    secret: 'SecretSecretMySecret',
    resave: false,
    saveUninitialized : true,
    cookie : {
        httpOnly : true,
        expires :Date.now() + (7 * 86400*1000),
        maxAge : (7 * 86400*1000)
    }
}
app.use(session(sessionConfig))
app.use(flash())

app.use(passport.initialize())
app.use(passport.session())
passport.use(new passportLocal(User.authenticate()))

passport.serializeUser(User.serializeUser()) // store in session
passport.deserializeUser(User.deserializeUser()) // unstore in session

app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error'); 
    next()
})

// VALIDATION MIDDLEWARES START


// VALIDATION MIDDLEWARES ENDS



app.get('/',(req, res)=>{
    res.render("home")
})

// creating a fake user for demonstration purposes
// app.get('/fakeUser', async(req, res)=>{
//     const user = new User({
//         email : 'testing@yelpcamp.com',
//         username : 'testing1'
//     })
//     const registeredUser = await User.register(user, 'myPassword');
//     res.send(registeredUser)
// })



// CAMPGROUND ROUTES START

app.use('/campgrounds', campgroundRoutes);

// CAMPGROUND ROUTES END



// REVIEW ROUTES START

app.use('/campgrounds/:id/reviews', reviewRoutes);

// REVIEW ROUTES END

// USERS ROUTES START

app.use('/', userRoutes);

// USER ROUTES END


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