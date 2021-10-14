const express = require('express');
const passport = require('passport');
const User = require('../models/user');
const router = express.Router();
const catchAsync = require('../utils/catchAsync')


router.get('/register', (req, res) => {
    res.render('users/register')
})

router.post('/register', catchAsync(async(req, res, next) => {
    // res.send(req.body)
    try{
        const { email, username, password } = req.body;
        const user = new User({ email, username})
        const registeredUser = await User.register(user, password);
        re.login(registeredUser, err => {
            if(err) return next(err)
            console.log(registeredUser);
            req.flash('success', 'Welcome to Yelp Camp')
            res.redirect('/campgrounds')
        });
    }catch(e){
        req.flash('error', e.message)
        res.redirect('/register')
    }
}));

router.get('/login', (req, res) => {
    res.render('users/login')
})

router.post('/login', passport.authenticate('local', {failureFlash : true, failureRedirect : '/login'} ), (req, res, next)=>{
    req.flash('success', "Welcome Back!")
    const redirectURL = req.session.returnTo || "/campgrounds";
    delete req.session.returnTo;
    res.redirect(redirectURL)
})

router.get('/logout', (req, res) => {
    req.logout();
    req.flash('success', 'Goodbye!')
    res.redirect('/campgrounds')
})

module.exports = router;