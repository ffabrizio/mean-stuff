var express         = require('express');
var Content         = require('../../models/content');

var router          = express.Router();

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

        Content.findById(req.params.id, function(err, content) {

            if (err)
                res.send(err);

            content.name = req.body.name;
            content.description = req.body.description

            content.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Content updated!' });
            });

        });
    });

module.exports = router;
