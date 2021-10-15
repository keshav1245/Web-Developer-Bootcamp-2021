const mongoose = require('mongoose');
const Campground = require('../models/campground');
const cities = require('./cities')
const {descriptors} = require('./seedHelpers')
const {places} = require('./seedHelpers')
mongoose.connect('mongodb://localhost:27017/yelp-camp',{
    useNewUrlParser: true,
    useUnifiedTopology : true
})

const db = mongoose.connection;
db.on('error', console.error.bind(console, "Connection Error"))
db.once("open", function() {
    console.log("Connection Successful");
})

const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Campground.deleteMany({});
    // const c = new Campground({title:'Purple Field'});
    // c.save()

    for (let i = 0; i < 50; i++) {
        const random10K = Math.floor(Math.random() * 1000)
        const camp = new Campground({
            author : '6168c77f28d8698546c0857a',
            location : `${cities[random10K].city}, ${cities[random10K].state}`,
            title : `${sample(descriptors)} ${sample(places)}`,
            image : 'https://source.unsplash.com/collection/483251',
            description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id adipisci earum unde, molestias, tempora vel aut tenetur aliquid totam error a quos ducimus provident eligendi laudantium saepe perferendis, corporis quis.",
            price : Math.floor(Math.random() * 20) + 1
        });
        await camp.save();
    }
}
seedDB().then(() => {
    mongoose.connection.close()
})