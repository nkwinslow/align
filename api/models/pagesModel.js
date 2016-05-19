var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var Page = new Schema({
    id: Number,
    link: String,
    name: String,
    text: String
})

module.exports = Mongoose.model('Page', Page);
