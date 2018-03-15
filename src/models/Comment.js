const mongoose = require('../db/mongoose');

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


