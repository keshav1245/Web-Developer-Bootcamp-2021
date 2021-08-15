const express = require('express')

// Vid 1 on express

const app = express()

// app.use((req, resp)=>{
    
//     //This is for anytime we have an incoming request from
//     //anywhere, this callback will run...
//     console.dir(req)
//     // console.dir(resp)
//     // resp.send("<h1>HELLO I AM WORKING !!</h1>")
//     // resp.send({color : 'red'})
//     console.log('Yes I am working says ExpressJS')

// })

// Starting a Server
const port = 3000
app.listen(port, ()=>{
    console.log(`Listening on http://localhost:${port}`)
})


// Routing Basics

// /cats => 'meow'
// /dogs => 'woof'
// /

app.get('/cats', (req, resp)=>{
    console.log('Cat Request!')
    resp.send('Meowww...')
})

app.get('/dogs', (res, resp)=>{
    console.log('Dog Request!!')
    resp.send('Woof Woof Woof..')
})

app.get('/', (res, resp)=>{
    console.log('Home Request!!')
    resp.send('Welcome to the Homepage !!')
})


app.post('/', (res, resp)=>{
    console.log('Post Home Request!!')
    resp.send('Home Post Sweet Home Post')
})

// Path parameters and Patterns

app.get('/r/:subredit', (req, resp)=>{
    console.log(req.params)
    resp.send(`<h1>Browing the ${req.params.subredit} subredit</h1>`)
})

app.get('/r/:subredit/:postId', (req, resp)=>{
    console.log(req.params)
    resp.send(`<h1>Viewing postId : ${req.params.postId} on ${req.params.subredit} subredit</h1>`)
})

// Query String!
app.get('/search',(req,resp)=>{
    console.log(req.query)
    const { q , color} = req.query
    if(!q || !color){
        console.log(req.query == {})
        resp.send('NOTHING SEARCHED!')
    }else{
        resp.send(`Hi ${req.query.color} ${req.query.q}`)
    }

})

app.get('*', (req, resp)=>{ // Always to be at end because other get requests 
                            // will get ignored because we can only have 1 response
    resp.send('Woopsie, wrong route encountered!!')
})

