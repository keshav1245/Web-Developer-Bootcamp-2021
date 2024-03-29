const User = require('../models/user');

module.exports.renderRegister = (req, res) => {
    res.render('users/register')
}

module.exports.createUser = async(req, res, next) => {
    // res.send(req.body)
    try{
        const { email, username, password } = req.body;
        const user = new User({ email, username})
        const registeredUser = await User.register(user, password);
        req.login(registeredUser, err => {
            if(err) return next(err)
            console.log(registeredUser);
            req.flash('success', 'Welcome to Yelp Camp')
            res.redirect('/campgrounds')
        });
    }catch(e){
        req.flash('error', e.message)
        res.redirect('/register')
    }
}

module.exports.renderLogin = (req, res) => {
    res.render('users/login')
}

module.exports.login = (req, res, next)=>{
    req.flash('success', "Welcome Back!")
    const redirectURL = req.session.returnTo || "/campgrounds";
    delete req.session.returnTo;
    res.redirect(redirectURL)
}

module.exports.logout = (req, res) => {
    req.logout();
    req.flash('success', 'Goodbye!')
    res.redirect('/campgrounds')
}