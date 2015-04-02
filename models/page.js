var mongoose            = require('mongoose');
var extend              = require('mongoose-schema-extend');
var Content             = require('./content');

var ModuleSchema = mongoose.Schema({ type: String, id: String });
var PageSchema   = Content.schema.extend({
    url: String,
    modules: [ModuleSchema]
});

module.exports = mongoose.model('Page', PageSchema);
