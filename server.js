var express = require("express");
var app = express();
var bodyParser = require("body-parser");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static("public"));

app.use(function(req, res, next) {
    res.status(404);
    res.send('404 file not found!');
});
app.use(function(err, req, res , next) {
    console.log(err);
    res.status(500);
    res.send('500 internal server error');
    res.send(err);
});

function startListening() {
    app.listen(8000, function() {
        console.log("server is started: http://localhost:8000 ⚡️");
    });
}

startListening();
