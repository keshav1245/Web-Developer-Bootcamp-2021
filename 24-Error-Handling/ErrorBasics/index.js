const express = require('express');
const morgan = require('morgan');
const AppError = require('./AppError');
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
        // res.send('Sorry you need correct password.');
        res.status(401)
        throw new AppError('Please enter a valid password.', 401);
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

app.get('/admin', (req, res)=>{
    throw new AppError('You are not an admin', 403)
})

app.get('/error',(req,res)=>{
    chicken.fly();
})

app.get('/dogs', (req, res)=>{
    console.log(req.requestTime)
    res.send('Dogs')
})

app.use((req, res)=>{
    res.status(404).send("ERROR 404, PAGE NOT FOUND BUDDY!!")
})

// app.use((err, req, res, next)=>{
//     console.log("***********************************************************")
//     console.log("**********************ERROR*************************")
//     console.log("***********************************************************")
//     // console.log(err) //calls next error handling middleware
//     // res.status(500).send('We got an error')
//     next(err)
// })

app.use((err, req, res, next)=>{
    const {status = 500, message} = err;
    res.status(status).send(message);
})

app.listen(3000, ()=>{
    console.log('App is listening on 3000');
});