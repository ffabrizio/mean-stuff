var mongoose        = require('mongoose');
var ContentSchema   = mongoose.Schema({
    name: String,
    description: String
});

module.exports = mongoose.model('Content', ContentSchema);
