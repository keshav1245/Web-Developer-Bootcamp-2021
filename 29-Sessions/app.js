const express = require('express');
const session = require('express-session');

const app = express();

const sessionOptions = {secret : 'thisisnotagoodsecret', resave :false, saveUninitialized : false};

app.use(session(sessionOptions));

app.get('/viewcount', (req,res,next)=>{
    if(req.session.count){
        req.session.count += 1
    } else{
        req.session.count = 1
    }
    res.send(`You have viewed this page ${req.session.count} Times`)
})

// The Default session storage is in memory in JS
// This can cause memory leaks and can cause scalability issues as well.
// For Production Recommended is Redis Store, Mongo Session store or Cassandra

app.get('/register', (req, res,next)=>{
    const {username = 'Unknown'} = req.query;
    req.session.username = username;
    res.redirect('/greet');
})

app.get('/greet', (req, res)=>{
    const {username} = req.session;
    res.send(`Welcome Back, ${username}`)
})

app.listen(3000, ()=>{
    console.log("Listening on port 3000")
});
