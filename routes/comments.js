const Comment = require('../models/Comment');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    Comment.find().then((comments) => {
        if (!comments.length) {
            return res.status(404).send('No comments found');
        }
        res.send(comments);
    }, (err) => {
        res.send(err);
    })
})

router.post('/', (req, res) => {
    let comment = new Comment ({
        author: req.body.author,
        text: req.body.text
    })
    console.log('comment to be saved: ', comment);
    comment.save().then((commentData) => {
        res.status(200).send(commentData);
    }, (err) => {
        console.log('Error while saving comment: ', err);
        res.status(500).send(err); 
    })
})

router.patch('/:id', (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;
    Comment.findByIdAndUpdate(id, { $set: { 'text' : updatedData.text }}).then((response) => {
        res.send(response);
    }, (err) => {
        res.status(400).send(err);
    })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    Comment.findByIdAndRemove(id).then((response) => {
        if (!response) {
            return res.status(404).send('Comment not found');
        }
        res.send(response);
    }, (err) => {
        res.status(400).send(err);
    })
})

module.exports = router;