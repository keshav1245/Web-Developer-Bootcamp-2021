const express = require('express');

const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const Product = require('./models/product');


mongoose.connect('mongodb://localhost:27017/farmStand', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log('Mongo Connection SUccessful ')
})
.catch(err => {
    console.log('Mongo Connection Error')
    console.error(err)
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(methodOverride('_method'))

app.get('/products', async (req, res) => {

    const {category} = req.query;
    if(category) {
        const products = await Product.find({category : category})
        res.render('products/index', {products, category})
    }else{ 
        const products = await Product.find({})
        res.render('products/index', {products, category : 'All'})
    }
    
    // console.log(products)
    
})

app.post("/products", async (req, res) => {
    const {name, price, category} = req.body;
    await Product.insertMany([{name : name, price : parseInt(price), category : category}])
    res.redirect('/products')
})

app.get('/products/new', (req, res) => { 
    res.render('products/addprod')
})

app.put('/products/:id', async (req, res) => {
    const {id} = req.params;
    // const {name, price, category} = req.body;
    await Product.findByIdAndUpdate(id, req.body, {runValidators : true, new : true})
    res.redirect('/products/'+id)
})

app.delete('/products/:id', async (req, res) => {
    const { id } = req.params;
    await Product.findByIdAndDelete(id)
    res.redirect('/products')
})

app.get('/products/:id', async (req, res) => { 
    const specificProd = await Product.findById(req.params.id)
    res.render('products/details',{prod : specificProd})
})

app.get('/products/:id/edit', async (req, res) => {
    const prod = await Product.findById(req.params.id)
    res.render('products/edit', {prod})
})

app.listen(3000, ()=>{

    console.log('app is listening on port 3000')

});