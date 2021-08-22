// MONGO DB 

// CREATING AND USING A DB

// user <DB NAME>


// C - CREATING A COLLECTION WHEN USING A DB

//db.collectionName.insertOne()
//db.collectionName.insertMany()
//db.collectionName.insert()

// R - READING OR SELECTING 

// db.dogs.find({breed : 'labrador'})
// db.dogs.findOne()


// U - UPDATING

// db.dogs.updateOne({name:'tomboy'}, {$set : {age:10}})
// db.dogs.updateMany();

// db.cats.updateOne({age : 6}, {$set : {age : 7}, $currentDate : {lastChanged : true}})


// D - DELETE

// db.cats.deleteOne({name : 'Blue'})
// db.cats.deleteMany({}); // Delete all items in a collection
