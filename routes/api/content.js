var express         = require('express');
var packageConfig   = require('../../package.json');
var Content         = require('../../models/content');

var router          = express.Router();

router.route('/')
    .get(function(req, res) {
        res.json({version : packageConfig.version});
    });

router.route('/')
    .post(function(req, res) {
        var content = new Content();
        content.name = req.body.name;
        content.description = req.body.description
        content.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Content created!' });
        });
    })
    .get(function(req, res) {
        Content.find(function(err, content) {
            if (err)
                res.send(err);

            res.json(content);
        });
    });

router.route('/:id')
    .get(function(req, res) {
        Content.findById(req.params.id, function(err, content) {
            if (err)
                res.send(err);
            res.json(content);
        });
    })
    .put(function(req, res) {

        // use our bear model to find the bear we want
        Content.findById(req.params.id, function(err, content) {

            if (err)
                res.send(err);

            content.name = req.body.name;
            content.description = req.body.description
            content.__v ++;

            content.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Content updated!' });
            });

        });
    });

module.exports = router;
