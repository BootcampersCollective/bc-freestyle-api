var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
const users = require('./routes/users');

//parses json data or urlencoded data recieved from front end
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//files for the main web address
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/users', users);



//boilerplate error handling
app.use(function(req, res, next) {
    res.status(404);
    res.send('404 file not found!');
});
//boilerplate error handling
app.use(function(err, req, res , next) {
    console.log(err);
    res.status(500);
    res.send('500 internal server error');
    res.send(err);
});

//listening function to be called after connected to DB.
function startListening() {
    app.listen(8000, function() {
        console.log("server is started: http://localhost:8000 ⚡️");
    });
}

startListening();
