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


// Nested Variables

// db.dogs.find({ 'personality.childFriendly' : true, size : "M"})

// MONGO DB OPERATORS

// db.dogs.find({age : {$gt : 2, $lt : 10}})

// db.dogs.find({age : {$gt : 2, $lt : 10}})

// COMPARISON OPERATORS

// 1. $lt - less than
// 2. $gt - greater than
// 3. $lte - less than equal to
// 4. $gte - greater than equal to
// 5. $ne - not equal to
// 6. $in - in
// 7. %nin - not in

// LOGICAL OPERATORS

// 8. $or - or

// db.dogs.find({$or : [{'peronality.catFriendly' : true},{age : {$lt : 2}}]})