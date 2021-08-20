// COMMENTS REST APP OVERVIEW 

// GET /comments - list all comments                      INDEX
// GET /comments/new - form for new comment               NEW
// POST /comments - Create a new comment                  CREATE
// GET /comments/:id - Get one comment                    SHOW
// GET /comments/:id/edit - Get one comment               EDIT
// PATCH /comments/:id - Update one comment               UPDATE
// DELETED /comments/:id - Delete a comment               DESTROY


// HTML FORMS CAN ONLY SEND POST OR GET REQUEST AND WE CAN FAKE IT WITH METHOD OVERRIDE PACKAGE


const express = require('express');
const { v4: uuid} = require('uuid');
const methodOverride = require('method-override');

const app = express();
const path = require('path');

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')
app.use(methodOverride('_method'))

let comments = [
    {
        username : 'Todd', 
        comment : 'This is a Comment Number 1',
        id : uuid()
    },
    {
        username : 'Skyler', 
        comment : 'This is a Comment Number 2',
        id : uuid()
    },
    {
        username : 'John', 
        comment : 'This is a Comment Number 3',
        id : uuid()
    },
    {
        username : 'Zukayu', 
        comment : 'This is a Comment Number 4',
        id : uuid()
    }
]

app.get('/', (req, resp)=>{
    resp.render('home')
})

app.post('/comments',(req, resp)=>{
    const {username, comment} = req.body;
    const id = uuid();
    comments.push({username: username, comment: comment , id : id})
    resp.redirect('/comments') //Redirecting in Express
})

app.get('/comments',(req, resp)=>{
    resp.render('allcomments', {comments})
})

app.get('/comments/new', (req, resp)=>{
    resp.render('new')
})

app.get('/comments/:id' ,(req, resp)=>{
    const { id } = req.params;
    const comment = comments.find(c => c.id === id)
    resp.render('show', { comment })
})

app.get('/comments/:id/edit' ,(req, resp)=>{
    const { id } = req.params;
    const comment = comments.find(c => c.id === id)
    resp.render('updateComment', { comment })
})

app.patch('/comments/:id' ,(req, resp)=>{
    const { id } = req.params;
    const c = req.body.comment;
    const comment = comments.find(c => c.id === id)
    comment.comment = c;
    resp.redirect('/comments') 
})

app.delete('/comments/:id', (req, resp)=>{

    const {id} = req.params;
    // for (let i = 0; i < comments.length; i++){
    //     if (comments[i].id === id){
    //         comments.splice(i,1)
    //         break;
    //     }

    // }
    comments = comments.filter(c => c.id !== id)
    resp.redirect('/comments') 


})


app.listen(3000, ()=>{
    console.log('Listening localhost at 3000');
});