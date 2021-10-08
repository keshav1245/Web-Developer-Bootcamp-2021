const express = require('express');
const mongoose = require('mongoose');
const app = express();
const User = require('./models/users')
const bcrypt = require('bcrypt');

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

app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.send("This is the Homepage!")
})

app.get('/register', (req, res) => {
    res.render('register.ejs')
})

app.post('/register', async (req, res) => {
    const {username, password} = req.body;
    const passwordHashed = await bcrypt.hash(password, 12)
    const user = new User({
        username, 
        password : passwordHashed
    });
    await user.save()
    res.redirect("/")
})

app.get('/login', (req, res)=>{
    res.render('login')
})

app.post('/login', async (req, res) => {
    const {username, password} = req.body
    const user = await User.findOne({username})
    const validatePass = bcrypt.compare(password, user.password)
    if(validatePass){
        res.send('Welcome!')
    }else{
        res.send('Try Again !')
    }
})

app.get('/secret', (req, res) => {
    res.send('This is secret, you cannot see me unless you are logged in..')
})


app.listen(3000 , () => {
    console.log("Listening to Port 3000")
})