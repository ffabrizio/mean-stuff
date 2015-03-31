var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ContentSchema   = new Schema({
    name: String,
    description: String
});

module.exports = mongoose.model('Content', ContentSchema);
