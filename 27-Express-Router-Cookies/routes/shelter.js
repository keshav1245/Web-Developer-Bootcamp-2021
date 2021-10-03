const express = require('express');
const router = express.Router();

router.get('/', (req, res, next)=>{
    res.send("ALL SHELTERS!!")
})

router.post('/', (req, res, next)=>{
    res.send("CREATING A SHELTER !")
})

router.get('/:id', (req, res, next)=>{
    res.send("VIEWING ONE SHELTER!!")
})

router.get('/:id/edit', (req, res, next)=>{
    res.send("EDITING ONE SHELTER!!")
})

module.exports = router;