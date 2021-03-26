// ForEach

const nums = [1,2,3,4,5,6,7,8,9,10]

function print(element){
    console.log(element)
}


nums.forEach(print)

nums.forEach(function(n){
    if (n % 2 !== 0){
        console.log(`${n} is odd`)
    }else{
        console.log(`${n} is even`)
    }
})

let movies  = [
    {
        title:"movie1",
        score: 90
    },
    {
        title:"movie2",
        score: 95
    },
    {
        title:"movie3",
        score: 80
    },
    {
        title:"movie4",
        score: 80
    },
    {
        title:"movie5",
        score: 85
    },
]

movies.forEach(function(mov){
    console.log(`${mov.title} - ${mov.score}/100`)
})

// map functions 

let texts = ['rofl', 'lol', 'omg', 'lawl']

let caps = texts.map(function(data){
    return data.toUpperCase()
})

console.log(caps)


let movieTitles = movies.map(function(mov){
    return mov.title.toUpperCase()
})

console.log(movieTitles)

function cleanNames(arr){
    return arr.map(function(str){return str.trim()})
}

// aero functions

let add = (x,y) => {return x + y;}

let die_num = () => {return Math.floor(Math.random() * 6 + 1)}

const greet = (name) => {return `Hey ${name}!`}

// aero functions with implicit return

let die_num2 = () => (Math.floor(Math.random() * 6 + 1))

let die_num3 = () => Math.floor(Math.random() * 6 + 1)

movies.forEach((mov) => console.log(`${mov.title} - ${mov.score}/100`))

// setTimeout and setInterval

// setTimeout(()=>{console.log("Helllloooo")},3000)

// console.log("GoodBye...")

// intevalID = setInterval(

//     () =>{
//         console.log( Math.floor(Math.random()*6+1) )
//     },2000
// )

// setTimeout(()=>{clearInterval(intevalID)},10000)


// FILTER Method

let numbers = [1,2,3,4,5,6,7,8,9]
let odds = numbers.filter((n) => {return n % 2 === 1})

console.log(odds)

// let highRated = movies.filter((mov) => {return mov.score >= 90})

let highRated = movies
    .filter(mov => mov.score >= 90)
    .map(m => m.title)


console.log(highRated)

function validUserNames(name_arr){
    return name_arr.filter(n => n.length < 10)
}

// Some/Every testing methods

let marks = [80,98,92,78,70,90,89,84,81,77]

console.log(marks.every(score => score >= 75))

console.log(marks.some(score => score >= 75))

function allEvens(nums){
    return nums.every(n => n%2 === 0)
}

// reduce function -> reduces array to 1 output.

let pri = [9.99, 1.50, 19.99, 49.99, 30.50]

let tot = 0
for(let p of pri){
    tot += p
}

console.log(tot)

tot = pri.reduce((total, p) => {return total + p})
console.log(tot)

tot = pri.reduce( (t,p) => t + p  )
console.log(tot)

console.log(pri.reduce( (min,p) => {if (p < min){return p}else{return min}}))

console.log(movies.reduce( (rated, mov) => {if(mov.score > rated.score){return mov}else{return rated}} ))

// [2,4,6,8].reduce((sum,num) => sum+num, 100)


// 
// When this is done in side an aero function, it represents the local scope
// in which it was created in.
let person  = {
    fname : "Keshav",
    lname : "Tangri",
    fullName : function(){return this.fname + this.lname},

    shoutName : function(){                                   //the place where this func is def
        setTimeout(() => { //The aero functions 'this' willbe                                    and now it will be able to access fullName() funct.
            console.log(this)
            console.log(this.fullName())
        },3000)
// setTimeout is a window function too.
    }

}






