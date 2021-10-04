const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser("thisismysecret"));

app.use('/greet', (req,res,next)=>{
    const { name = 'anonymous' } = req.cookies
    res.send("Hey There ! "+ name)
})

app.use('/setname', (req,res,next)=>{
    res.cookie('name', 'Keshav')
    res.cookie('animal', 'Hippo')
    res.send("Ok, Sent you a Cookie")
})

app.get('/getsignedcookie', (req, res, next)=>{
    res.cookie('fruit', 'mango', {signed:true})
    res.send('Okay, Signed your Fruits Cookie')

})

app.get('/verifyfruit', (req, res, next)=>{
    // res.send(req.cookies)
    res.send(req.signedCookies)

})

app.listen(3000, ()=>{
    console.log("PORT 3000")
});