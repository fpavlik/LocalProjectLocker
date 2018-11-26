const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var authorSchema = new Schema({
    name : String
});

var authorModel = mongoose.model('author', authorSchema);

module.exports = authorModel;