const mongoose = require('mongoose');
const Product = require('./product')
const farmSchema = new mongoose.Schema({


    name : {
        type : String,
        required : [true,'Farm Must have a Name']
    },

    city : {
        type : String
    },

    email : {
        type : String,
        required : [true,'Farm Must have a Email']
    },

    products :[
        {
            type : mongoose.Schema.Types.ObjectId, 
            ref : "Product"
        }
    ]


})

farmSchema.post('findOneAndDelete', async (farm) => {
    if(farm.products.length){
        const resp = await Product.deleteMany({ _id : { $in : farm.products}})
        console.log(resp)
    }
})

const Farm = mongoose.model('Farm', farmSchema);
 
module.exports = Farm;