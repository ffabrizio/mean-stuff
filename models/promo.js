var mongoose            = require('mongoose');
var extend              = require('mongoose-schema-extend');
var Content             = require('./content');

var PromoSchema = Content.schema.extend({
    image: String
});

module.exports = mongoose.model('Promo', PromoSchema);