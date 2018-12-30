var express = require('express');
var router = express.Router();

var topic = require('./topic');

router.get('/',function(req,res){
    res.redirect('topic');
})

module.exports = router;