var express = require('express');
var router = express.Router();
var newsletters = require('../public/newsletter/newsletter.json');

router.get('/', function(req, res) {    
    res.render('index', {
        pageTitle: 'Home',
        pageID: 'home',
        newsletters: newsletters
    });
});

module.exports = router;
