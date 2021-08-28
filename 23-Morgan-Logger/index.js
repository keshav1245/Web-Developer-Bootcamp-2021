const express = require('express');
const morgan = require('morgan');
const app = express();
app.use(morgan('tiny'))

// app.use((req, res, next) => {
//     console.log('This is my first middleware')
//     return next();
//     console.log('This is my first middleware after next')
// })

// app.use((req, res, next) => {
//     console.log('This is my second middleware')
//     return next();
// })

const addDate = (req, res, next) => {
    // req.method = "GET"; //mischievious
    req.requestTime = Date.now();
    console.log(req.method, req.path);
    next();
}

app.use(addDate);//ordering matters!!

app.use('/dogs', (req, res, next) => {
    console.log('I LOVE DOGS')
    next();
})

const verifyPassword = (req, res, next) => {
    console.log(req.query)
    const {password} = req.query;
    if(password === 'paneer') {
        next();
    }else{
        res.send('Sorry you need correct password.');
    }
}

app.get('/', (req, res)=>{
    console.log(req.requestTime)
    res.send('HOME SWEET HOME')
})

app.get('/secret', verifyPassword, (req, res)=>{
    console.log(req.requestTime)
    res.send("Oops, the secret has been revealed !!!")
})

app.get('/dogs', (req, res)=>{
    console.log(req.requestTime)
    res.send('Dogs')
})

app.use((req, res)=>{
    res.status(404).send("ERROR 404, PAGE NOT FOUND BUDDY!!")
})

app.listen(3000, ()=>{
    console.log('App is listening on 3000');
});