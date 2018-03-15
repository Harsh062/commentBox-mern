const Comment = require('../models/Comment');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('GET COMMENTS called');
    Comment.find().then((err, comments) => {
        if (err) {
            return res.status(500).send('Error while fetching comments');
        }
        if (!comments) {
            return res.status(404).send('No comments found');
        }
        
    })
})

router.post('/', (req, res) => {
    console.log('POST COMMENTS called');
    let comment = new Comment ({
        author: req.body.author,
        text: req.body.text
    })

    comment.save().then((err, commentData) => {
        if (err) {
           return res.status(500).send('Error while saving comment'); 
        }
        return res.status(200).send('Comment Saved Successfully');
    })
})

module.exports = router;