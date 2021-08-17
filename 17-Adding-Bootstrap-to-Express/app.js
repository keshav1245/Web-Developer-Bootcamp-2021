// Templating allows us to define a preset 'pattern' for a webpage, 
// that we can dynamically modify. 

const express = require('express')
const path = require('path')
const redditData = require('./data.json')

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))
app.use(express.static(path.join(__dirname, '/public')))


app.get('/', (req, resp) => {
    resp.render('home')
})

app.get('/r/:subreddit', (req, resp) => {
    const { subreddit } = req.params;
    const data = redditData[subreddit]
    if(data){
        resp.render('subreddit', { ...data })
    }else{ 
        resp.render('notFound',{subreddit})
    }

})

app.get('/cats',(req, resp)=>{
    const cats = ['Blue', 'Rocket', 'Monty', 'Stephanie', 'Winston']

    resp.render('cats', {cats})

})

app.get('/random', (req, resp) => {
    // Passing Data to Templates.
    const num = Math.floor(Math.random() * 10) + 1
    resp.render('random', { random: num });
})

app.listen(3000, () => {
    console.log('Listening to Port 3000')
})