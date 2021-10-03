const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    res.send("ALL DOGS")
})

router.get('/:id', function(req, res) {
    res.send("VIEW ONE DOG")
})

router.get('/:id/edit', function(req, res) {
    res.send("EDITING A DOG")
})

router.post('/', function(req, res) {
    res.send("EDIT A DOG")
})


module.exports = router;