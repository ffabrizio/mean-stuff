var express     = require('express');
var router      = express.Router();
var Page        = require('../models/page');

/* GET home page. */
router.get('/', function(req, res, next) {
    Page.findOne("{ \"name\" : \"home\" }", function(err, page) {
        if (err)
            res.send(err);
        console.log("Loaded page:", page.name)
        res.render('index', page);
    });

});

module.exports = router;
