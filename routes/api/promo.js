var express         = require('express');
var Promo           = require('../../models/promo');

var router          = express.Router();

router.route('/')
    .post(function(req, res) {
        var content = new Promo();
        content.name = req.body.name;
        content.description = req.body.description;
        content.image = req.body.image;
        content.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Content created!' });
        });
    })
    .get(function(req, res) {
        Promo.find(function(err, content) {
            if (err)
                res.send(err);

            res.json(content);
        });
    });

router.route('/:id')
    .get(function(req, res) {
        Promo.findById(req.params.id, function(err, content) {
            if (err)
                res.send(err);
            res.json(content);
        });
    })
    .put(function(req, res) {

        // use our bear model to find the bear we want
        Promo.findById(req.params.id, function(err, content) {

            if (err)
                res.send(err);

            content.name = req.body.name;
            content.description = req.body.description;
            content.image = req.body.image;

            content.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Content updated!' });
            });

        });
    });

module.exports = router;
