var express = require('express');
var router = express.Router();

router.get('/newsletter/:issue', function(req, res) {
    res.render(`./public/newsletter/${req.params.issue}/index.html`, {
        pageTitle: 'Newsletter',
        pageID: 'newsletter'
    });
});

module.exports = router;
