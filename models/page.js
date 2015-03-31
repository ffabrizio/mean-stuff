var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ModuleSchema = new Schema({ type: String, id: String });
var PageSchema   = new Schema({
    name: String,
    description: String,
    modules: [ModuleSchema]
});

module.exports = mongoose.model('Page', PageSchema);
