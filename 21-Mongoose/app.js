// Mongoose help us to connect Node and JS with MongoDB

// ODM - Object Data Mapper

// maps data that come from mongo to frontent and from frontend to mongo as JS Objects
// on which we can add methods to.

// provide us ways to model out our application data and define a schema.


const mongoose = require('mongoose');

// MAKING A CONNECTION TO MONGODB
mongoose.connect('mongodb://localhost:27017/movieApp', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log('Mongoose Connection SUccessful ')
})
.catch(err => console.error(err));

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//     console.log('We are Connected !')
// });


// Making a model - JS Classes that represents info in a mongo DB (collection)

// 1. Schema : Blueprint, mapping of different collection keys from Mongo to different
// types in JS

const movieSchema = mongoose.Schema({
    title : String,
    year : Number,
    score : Number,
    rating : String
});

const Movie = mongoose.model('Movie', movieSchema); //Name should be singular and upper case 1st letter
// Mongoose will create collection called 'movies'

// Now we can make new instances of Movie class and save then to the MongoDB.

// C - CREATE
// const mov1 = new Movie({title : "mov1", year : 1986, score : 9.2 , rating : "UA"})
// mov1.save()

// Movie.insertMany([
//     {title : "mov2", year : 1986, score : 9.2 , rating : "UA"},
//     {title : "mov3", year : 1988, score : 8.2 , rating : "A"},
//     {title : "mov4", year : 1996, score : 8.0 , rating : "PG"},
//     {title : "mov5", year : 2000, score : 7 , rating : "R"},
//     {title : "mov6", year : 2015, score : 9.8 , rating : "PG-13"}
// ]).then((data)=>{
//     console.log('Records Inserted!')
//     console.log(data)
// }).catch((err)=>{
//     console.log('Error during inserting records')
//     console.log(err)
// })

// R - READ
// Result of find in mongoose is not a promise, it is actually mongoose query. They do have
// then function, but for a full fledge promise, we can use .exec();

// Movie.find({}).then(data => console.log(data))
// Movie.find({rating : 'PG-13'}).then(data => console.log(data))
// Movie.find({year : {$gte : 2000}}).then(data => console.log(data))
// Movie.find({year : {$lte : 1990}}).then(data => console.log(data))
// Movie.findOne({}).then(m => console.log(m))
// Movie.find({_id : '6124711b61a2ee10deee6e7d'}).then(m => console.log(m))
// Movie.findById('6124711b61a2ee10deee6e7d').then(m => console.log(m))

// U - Updating in Mongoose

// Movie.updateOne({title : "mov2"},{score : 10}).then(res => console.log(res))
// Movie.updateMany({title : {$in : ['mov3','mov4']}}, {score : 10}).then(m => console.log(m))

// Movie.findOneAndUpdate({_id: '61247586f712cb13215840fc'},{score : 8.2}).then(m => console.log(m))
// Movie.findOneAndUpdate({_id: '61247586f712cb13215840fc'},{score : 8.2}, {new : true}).then(m => console.log(m))


// D - DELETE

// Movie.remove({title : 'mov6'}).then(m => console.log(m))
// Movie.deleteMany({year : {$gte : 2006}}).then(m => console.log(m))
// Movie.findOneAndDelete({score : 9.2}).then(m => console.log(m))

