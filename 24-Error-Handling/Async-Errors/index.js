const express = require('express');

const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const Product = require('./models/product');
const AppError = require('./AppError')


mongoose.connect('mongodb://localhost:27017/farmStand2Err', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Mongo Connection SUccessful ')
    })
    .catch(err => {
        console.log('Mongo Connection Error')
        console.error(err)
    });

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride('_method'))

function wrapAsync(fn) {
    return function (req, res, next) {
        fn(req, res, next).catch(e => next(e))
    }
}

app.get('/products', async (req, res, next) => {
    try {
        const { category } = req.query;
        if (category) {
            const products = await Product.find({ category: category })
            res.render('products/index', { products, category })
        } else {
            const products = await Product.find({})
            res.render('products/index', { products, category: 'All' })
        }
    } catch (e) {
        next(e)
    }
    // console.log(products)

})

app.post("/products", async (req, res, next) => {
    try {
        const { name, price, category } = req.body;
        await Product.insertMany([{ name: name, price: parseInt(price), category: category }])
        res.redirect('/products')
    } catch (e) {
        next(e)
    }
})

app.get('/products/new', (req, res) => {
    res.render('products/addprod')
})

app.put('/products/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        // const {name, price, category} = req.body;
        await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true })
        res.redirect('/products/' + id)
    } catch (e) {
        next(e)
    }
})

app.delete('/products/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        await Product.findByIdAndDelete(id)
        res.redirect('/products')

    } catch (e) {
        next(e)
    }
})

// For asynchronous functions, we have to invoke next and pass error in that so that it
// gets to the error handler and get executed!
app.get('/products/:id', wrapAsync(async (req, res, next) => {

    const specificProd = await Product.findById(req.params.id)
    if (!specificProd) {
        throw new AppError('Product Not Found', 404)
    }
    res.render('products/details', { prod: specificProd })


}))

app.get('/products/:id/edit', async (req, res, next) => {
    try {
        const prod = await Product.findById(req.params.id)
        if (!prod) {
            throw new AppError('Product Not Found', 404)
        }
        res.render('products/edit', { prod })
    } catch (e) {
        next(e)
    }

})

const handleValidationError = err =>{
    console.log(err)
    return new AppError(`Validation Failed ! ${err.message}`, 400)
}

//Knowing name of Mongoose error
app.use((err,req,res,next)=>{
    console.log(err.name)
    if(err.name === 'ValidationError') err = handleValidationError(err)
    next(err)
})

app.use((err, req, res, next) => {
    const { status = 500, message = "Somthing Went Wrong" } = err;
    res.status(status).send(message);
})

app.listen(3000, () => {

    console.log('app is listening on port 3000')

});