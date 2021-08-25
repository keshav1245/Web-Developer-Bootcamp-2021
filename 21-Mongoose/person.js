const mongoose = require('mongoose');

// MAKING A CONNECTION TO MONGODB
mongoose.connect('mongodb://localhost:27017/shopApp', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log('Mongoose Connection SUccessful ')
})
.catch(err => console.error(err));

const personSchema = new mongoose.Schema({
    first : String, 
    last : String
})

personSchema.virtual('fullName').get(function(){//adding properties
    return `${this.first} ${this.last}`
})
// .set(function(v){
    
// })




// Mongoose middle ware

// Mongoose gives us facilities to run a code before and after certain things are executed.
// pre post hook

personSchema.pre('save', async function(){ 

    //accept param in function or return promise
    this.first = 'Yo'
    this.last = "Mama"
    console.log('About to Save bro')

})

personSchema.post('save', async function(){ 

    //accept param in function or return promise

    console.log('Just saved the data')

})

// let keshav = new Person({first : 'Keshav', last:'Tangri'})
// keshav.save().then(p => console.log(p))
// OUTPUT ------>>>
// About to Save bro
// Just saved the data
// { _id: 6125c92bbebe2e61a8bde3f9, first: 'Yo', last: 'Mama', __v: 0 }


const Person = mongoose.model('Person', personSchema);