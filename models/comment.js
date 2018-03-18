const mongoose = require('mongoose');
const Promise = require('bluebird');
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost:27017/CommentBox_Mern');

const CommentSchema = mongoose.Schema({
    author: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }
})

const CommentModel = mongoose.model('Comments', CommentSchema);

module.exports = CommentModel;