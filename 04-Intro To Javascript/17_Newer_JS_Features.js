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


// Object Destructuring  - more common and practical

let user = {
    email : "harvey@gmail.com",
    pass : "mnwe evkw vkj srkjv ekjrb",
    fname : "harvey",
    lname : "milk",
    born : 1930,
    died : 1978,
    bio : "kanvksnlkvjnskj vkjwr vkj wkvn kwv",
    city : "San Francisco",
    state : "California"

}


let user2 = {
    email : "stacy@gmail.com",
    pass : "mnwe evkw vkj srkjv ekjrb",
    fname : "Stacy",
    lname : "Gonslaves",
    born : 1930,
    city : "Tulsa",
    state : "Oklahoma"
}

// let fname = user.fname
// let lname = user.lname

// let email = user.email is equivalent to let {email} = user
let {email, fname, lname, pass} = user

let {born:birthYear = "N/A"} = user;

let {city, state, died = "N/A"} = user2


//params destructuring - commonly used with objects

function fullName(user){
    // return `${user.fname} ${user.lname}`
    let {fname, lname} = user
    return `${fname} ${lname}`
}

function fullName2({fname, lname}){
    return `${fname} ${lname}`
}

let movies = [
    {
        title: "mov1",
        score : 50,
        year : 1984
    },
    {
        title: "mov2",
        score : 60,
        year : 1994
    },
    {
        title: "mov3",
        score : 70,
        year : 1974
    },
    {
        title: "mov4",
        score : 80,
        year : 2004
    },
    {
        title: "mov5",
        score : 90,
        year : 2014
    },
]

movies.filter((movie)=>movie.score >=70)

movies.filter(({score})=>score >=70)

movies.map(({title, score}) => `${title} is rated ${score}`)