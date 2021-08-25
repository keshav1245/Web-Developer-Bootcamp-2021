const mongoose = require('mongoose');

// MAKING A CONNECTION TO MONGODB
mongoose.connect('mongodb://localhost:27017/shopApp', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log('Mongoose Connection SUccessful ')
})
.catch(err => console.error(err));

// Validations
const productSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    price : {
        type :Number, 
        min : [0, "Price Must be positive bruhh!!"]
    },
    onSale : {
        type : Boolean,
        default : false
    },
    categories : [String],
    qty : {
        online : {
            type : Number,
            default : 0
        }, 
        inStore : {
            type : Number,
            default : 0
        }
    },
    size : {
        type : String,
        enum : ['S', 'M', "L"]
    }

})
// Instance methods...
productSchema.methods.greet = function() { // Use traditional function only 
    console.log('Helloooo Hi Howdy')
    console.log(`- from ${this.name}`)
}

productSchema.methods.toggleOnSale = function(){
    this.onSale = !this.onSale
    return this.save()
}

productSchema.methods.addCategory = function(cate){
    this.categories.push(cate)
    return this.save()
}

// Static Methods on Model.
productSchema.statics.fireSale = function(){ 

    return this.updateMany({}, {onSale : true , price : 0})

}
// This fireSale function is a method on Pproduct and not on its instance
// this here refers to Product and not individual elements


const Product = mongoose.model('Product', productSchema);

// const bike = new Product({name : 'Rocking Soul', price : 599, categories : ['21 Gears', '3 shifting mechanisms']})
// bike.save()
// .then((data) => {
//     console.log('Data saved');
//     console.log(data);
// })
// .catch(err => console.error(err));

// Updating Validation Issues

// Product.findOneAndUpdate({name : 'Rocking Soul'}, {price : 100}, {new : true, runValidators : true})
// .then((data) => {
//     console.log('Data saved');
//     console.log(data);
// })
// .catch(err => console.error(err));


// Making Custom instance Methods...


const findProduct = async() => { 
    const found = await Product.findOne({name : 'Duke Hurracun',})
    found.greet();
}

Product.fireSale().then(m => console.log(m))

