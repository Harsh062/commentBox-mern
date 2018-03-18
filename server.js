const express = require('express');
const bodyParser = require('body-parser');
const comments = require('./routes/comments');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//To prevent errors from Cross Origin Resource Sharing, we will set 
//our headers to allow CORS with middleware like so:
app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
   //and remove cacheing so we get the most recent comments
    res.setHeader("Cache-Control", "no-cache");
    next();
   });

app.use('/api', (req, res) => {
    res.send('API Called');
});

app.use('/comments', comments);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});