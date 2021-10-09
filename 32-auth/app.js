const express = require('express');
const mongoose = require('mongoose');
const app = express();
const User = require('./models/users')
const bcrypt = require('bcrypt');
const session = require('express-session');

mongoose.connect('mongodb://localhost:27017/authPractice', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log('Mongo Connection SUccessful ')
})
.catch(err => {
    console.log('Mongo Connection Error')
    console.error(err)
});


app.set('view engine','ejs')
app.set('views','views')
app.use(session({secret:'notagoodsecret'}))

app.use(express.urlencoded({extended: true}))

const requireLogin = (req, res, next) => {
    if(req.session.user_id){
        next();
    }else{ 
        res.redirect('/login')
    }
}

app.get('/', (req, res) => {
    res.send("This is the Homepage!")
})

app.get('/register', (req, res) => {
    res.render('register.ejs')
})

app.post('/register', async (req, res) => {
    const {username, password} = req.body;
    // const passwordHashed = await bcrypt.hash(password, 12) // hashed in model, before saving
    const user = new User({
        username, 
        password
    });
    await user.save()
    req.session.user_id = user._id;
    res.redirect("/")
})

app.get('/login', (req, res)=>{
    res.render('login')
})

app.post('/login', async (req, res) => {
    const {username, password} = req.body
    const userData = await User.signInWithUsernameAndPassword(username, password)
    if(userData) {
        req.session.user_id = userData._id;
        res.redirect("/secret")
    }else{
        res.redirect('/login')
    }
})

app.post('/logout',(req, res)=>{
    // req.session.user_id = null;
    req.session.destroy();
    res.redirect('/login')
})

app.get('/secret', requireLogin, (req, res) => {
    res.render('secret')
    // res.send('This is secret, you cannot see me unless you are logged in..')
})


app.listen(3000 , () => {
    console.log("Listening to Port 3000")
})