const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/CommentBox_Mern');

export default mongoose;