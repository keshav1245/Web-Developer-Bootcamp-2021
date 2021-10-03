const express = require('express');
const router = express.Router();

router.use((req, res, next)=>{
    if(req.query.isAdmin){
        next()
    }
    res.send("NOT AN ADMIN ACCOUNT!")
})

router.get('/topsecret', function(req, res) {
    res.send("THIS IS TOP SECRET")
})

router.get('/deleteeverything', function(req, res) {
    res.send("OK DELETE ALL")
})


module.exports = router;