const express = require('express');

const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const Product = require('./models/product');
const Farm = require('./models/farm');
const AppError = require('./AppError')


mongoose.connect('mongodb://localhost:27017/farmStand3MultiModel', { useNewUrlParser: true, useUnifiedTopology: true })
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


//FARM ROUTES

app.get('/farms/new', (req, res, next) => {
    res.render('farms/new')
})

app.post('/farms', wrapAsync(async (req, res, next) => {
    try{
        const f = new Farm(req.body)
        await f.save()
        res.redirect('/farms')
    }catch(e){
        throw new AppError(e.message, 400)
    }
}))

app.get('/farms', wrapAsync(async (req, res, next)=>{

    try {
        const farms = await Farm.find({})
        res.render('farms/index', {farms}) 
    }catch(e){
        throw new AppError(e.message, 400)
    }

}))

app.get('/farms/:id', wrapAsync(async (req, res, next)=>{

    const {id} = req.params
    const farm = await Farm.findById(id).populate('products')
    // console.log(farm)
    if(!farm){
        throw new AppError('Requested Farm not Found !' , 404)
    }
    res.render('farms/details', {farm})
    // res.send("Working")
} ))

app.get('/farms/:farm_id/products/new', wrapAsync(async (req, res, next) => {
    try{
        const {farm_id} = req.params;
        const farm = await Farm.findById(farm_id)
        if(!farm){
            throw new AppError('ERROR 404 : Farm Not Found', 404)
        }
        res.render('products/addprod', {farm_id, farm})
    }catch(e){
        throw new AppError(e.message, 400)
    }
}))

app.post('/farms/:farm_id/products', wrapAsync(async(req, res, next) => {
    try{
        const {farm_id} = req.params
        const { name, price, category } = req.body;
        const farm = await Farm.findById(farm_id)
        if(!farm){
            throw new AppError('ERROR 404 : Cannot Find Farm with Id : '+farm_id, 404)
        }
        const prod = new Product({ name: name, price: parseInt(price), category: category })
        farm.products.push(prod)
        prod.farm = farm
        // res.send(farm)
        await prod.save();
        await farm.save();
        res.redirect(`/farms/${farm._id}`)
    }catch(e){
        throw new AppError('ERROR 400 : '+e.message, 400)
    }
    
}))


app.delete('/farms/:id', wrapAsync(async (req, res, next) => {

    const {id} = req.params
    await Farm.findByIdAndDelete(id)
    res.redirect('/farms')
}) )













// PRODUCTS ROUTES
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

// app.post("/products", async (req, res, next) => {
//     try {
//         const { name, price, category } = req.body;
//         await Product.insertMany([{ name: name, price: parseInt(price), category: category }])
//         res.redirect('/products')
//     } catch (e) {
//         next(e)
//     }
// })

// app.get('/products/new', (req, res) => {
//     res.render('products/addprod')
// })

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

    const specificProd = await Product.findById(req.params.id).populate('farm', 'name')
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