const mongoose = require('mongoose');
const Campground = require('../models/campground');
const cities = require('./cities')
const {descriptors} = require('./seedHelpers')
const {places} = require('./seedHelpers')
const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/yelp-camp'
mongoose.connect(dbUrl,{
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

    for (let i = 0; i < 300; i++) {
        const random10K = Math.floor(Math.random() * 1000)
        const camp = new Campground({
            author : '618b6285906e4af93dc72541',
            location : `${cities[random10K].city}, ${cities[random10K].state}`,
            title : `${sample(descriptors)} ${sample(places)}`,
            images : [
                {
                  url: 'https://res.cloudinary.com/zukayu/image/upload/v1634519925/YelpCamp/nzgzc5u1jkbnwixb8ctq.jpg',
                  filename: 'YelpCamp/nzgzc5u1jkbnwixb8ctq'
                },
                {
                  url: 'https://res.cloudinary.com/zukayu/image/upload/v1634519958/YelpCamp/njtqqs3ftvfywds8eaq5.jpg',
                  filename: 'YelpCamp/njtqqs3ftvfywds8eaq5'
                },
                {
                  url: 'https://res.cloudinary.com/zukayu/image/upload/v1634519976/YelpCamp/divdkednbntzt91hra7s.jpg',
                  filename: 'YelpCamp/divdkednbntzt91hra7s'
                }
              ],
            description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id adipisci earum unde, molestias, tempora vel aut tenetur aliquid totam error a quos ducimus provident eligendi laudantium saepe perferendis, corporis quis.",
            price : Math.floor(Math.random() * 20) + 1,
            geometry : {
              type : "Point",
              coordinates : [
                cities[random10K].longitude,
                cities[random10K].latitude
              ]
            }
        });
        await camp.save();
    }
}
seedDB().then(() => {
    mongoose.connection.close()
})