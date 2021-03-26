// Default params

function rollDie(numSide){
    if (numSide === undefined){
        numSide = 6
    }
    return Math.floor(Math.random() * numSide + 1)
}

function rollDieBetter(numSide = 6){
    return Math.floor(Math.random() * numSide + 1)
}

// Spread

Math.max(13,4,5,21,100,12,32,14,25235,2455644,)
Math.max(13,4,5,21,100,12,32,14,25235,2455644,98988)
Math.min(13,4,5,21,100,12,32,14,25235,2455644,98988)
nums  = [13,4,5,21,100,12,32,14,25235,2455644,98988]
Math.max(nums) // wont work
Math.max(...nums) // will work 

// Spread is similar to *[list of python]


// spread in arrays
let cats = ['c1', 'c2' , 'c3']
let dogs = ['d1' , 'd2' , 'd3']

let allpets = [...cats , ...dogs]
console.log(allpets)

// Spread in objects

let fen = { legs : 4 , family : "fen"}
let can = { isFurry : true , family : "can"}

console.log({...fen , ...can})


// REST Params


function summAll(){
    console.log(arguments)
}

// REST

function sum(...nums){
    return nums.reduce( (acc,ele) => acc + ele )
}

// Array Destructuring 

let [ele1,ele2,ele3] = ["Mr", "Keshav", "Tangri"]

console.log(ele1)
console.log(ele2)
console.log(ele3)


let [ele4,...eles] = ["Mr", "Keshav", "Tangri"]

console.log(ele4)
console.log(eles)


