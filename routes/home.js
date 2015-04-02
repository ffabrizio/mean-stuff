var express     = require('express');
var router      = express.Router();
var Page        = require('../models/page');

router.route('/')
    .get(function(req, res, next) {
        var pageUrl = "home";
        Page.findOne({ url: pageUrl }, function(err, page) {
            if (err)
                res.send(err);

            if (page !== null) {
                console.log("Loaded page:", page.id);
                res.render("index", page);
            } else {
                err = new Error('Not Found');
                err.status = 404;
                next(err);
            }
        });
    });

router.route(/^(.*)$/)
    .get(function(req, res, next) {
        var pageUrl = (req.params[0] || "/home").substr(1);
        Page.findOne({ url: pageUrl }, function(err, page) {
            if (err)
                res.send(err);

            if (page !== null) {
                console.log("Loaded page:", page.url);
                res.render("index", page);
            } else {
                err = new Error('Not Found');
                err.status = 404;
                next(err);
            }
        });
    });

module.exports = router;
