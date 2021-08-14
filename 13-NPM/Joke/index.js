let jokes = require('give-me-a-joke')
let colors = require('colors')
// console.dir(jokes)

jokes.getRandomDadJoke((joke)=>{
    console.log(joke.rainbow)
})