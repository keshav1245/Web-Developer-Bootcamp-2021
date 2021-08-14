function rollDie(side = 1){
    return Math.floor(Math.random()* side + 1)
}

function greet(person){

    console.log(`Hi ${person}`)

}

function greet2(person,lname){

    console.log(`Hi ${person} ${lname[0]}`)

}

function rep(str, num){

    console.log(str.repeat(num))

}

// define isSnakeEyes below:
function isSnakeEyes(d1,d2){
    if (d1 === d2 && d1 === 1){
        console.log("Snake Eyes!")
    }else{
        console.log("Not Snake Eyes!")
    }
}

function lastElement(arr){
    if (arr.length !== 0){
        return arr[arr.length-1]
    }else{
        return null
    }
}

// DEFINE YOUR FUNCTION BELOW:
function capitalize(str){
    // f = str[0]
    return str[0].toUpperCase() + str.slice(1)
}

// DEFINE YOUR FUNCTION BELOW:
function returnDay(day){
    
    if (day < 1 || day > 7){
        return null
    }
    
    const dow = [
        "Monday", 
        "Tuesday", 
        "Wednesday", 
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
        ]
        
        return dow[day-1]
    
}

// Functions Scopes

let apples = 0
function collectApples(){
    apples = 6
}

console.log(apples)
collectApples()
console.log(apples)


let bird = "Scarlet Macaw"
function birdWatch(){
    let bird = "Great Blue Heron"
    console.log(bird)
}

console.log(bird)
birdWatch()
console.log(bird)

const creature = "Common Sea Dragon";
 
function scubaDive(){
    const creature = "Spanish Dancer"; //A type of sea slug
    console.log(creature);
}
 
scubaDive();

// The above examples are for function scope

// Block code
let radius = 8

if (radius > 0){
    const PI = 3.14159
    let msg = "HIIII"
}

console.log(radius)

// Lexical scope

function bankRobbed(){
    const heroes = ['spidy','batman','wolverine']
    function cry(){
        for(hero of heroes){
            console.log(`${hero}`)
        }
    }
    cry()
}

bankRobbed()


// FUNCTION EXPRESSIONS

function way1(x,y){
    return x + y
}

const two_add = function(x,y){
    return x + y
}

// higher order functions
let greeting = function(){
    console.log("Hello, Greetings")
}


function callTwice(fun){
    fun()
    fun()
}

// Returning Functions

function make_mystery_func(){
    let ran = Math.random()

    if (ran > 0.5){
        return function(){
            console.log("I am Happy !")
        }
    }else{
        return function(){
            console.log("I am Sad !")
        }
    }
}

function make_bet_fun(min,max){
    return function(num){
        return num >= min && num <= max
    }
}

// FUnctions as methods
let math = {
    multiply: function(x,y){
        return x * y
    },
    square: function(x){
        return x ** 2
    },
    cube : function(x){
        return x ** 3
    }
}

const square ={
    area: function(side){
        return side * side
    },
    perimeter: function(side){
        return 4 * side
    }
}

let cat = {
    name:"Kitty",
    color:'grey',
    breed:"german",
    meow(){
        console.log(`${this.name} says Purrrrr Meoww`) //Kitty says Purrrrr Meoww
    }
}

let m2 = cat.meow
// m2() prints Kitty says Purrrrr Meoww when use cat.name instead of this.name


let hen = {
    
    name:"Helen",
    eggCount:0,
    layAnEgg: function(){
        this.eggCount++
        return "EGG"
    }
    
}