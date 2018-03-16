const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/CommentBox_Mern');

const CommentSchema = mongoose.Schema({
    author: {
        type: String,
        require: true
    },
    text: {
        type: String,
        require: true
    }
})

const CommentModel = mongoose.model('Comments', CommentSchema);

module.exports = CommentModel;