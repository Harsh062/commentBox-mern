const express = require('express');
const bodyParser = require('body-parser');
const comments = require('./routes/comments');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', (req, res) => {
    res.send('API Called');
});

app.use('/comments', comments);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});