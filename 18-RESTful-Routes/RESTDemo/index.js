const express = require('express');
const app = express();

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/tacos', (req, res) => {
    res.send("GET /tacos Response Body")
})

app.post('/tacos', (req, res) => {
    console.log(req.body);
    res.send("POST /tacos Response Body")
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})