var fs = require('fs');
var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var responseBuffer = fs.readFileSync("index.html");
    var responseString = new Buffer(responseBuffer).toString();
    response.send(responseString);
});

// app.get('/s/css/social-buttons.css', function(request, response) {
//     var responseBuffer = fs.readFileSync("css/social-buttons.css");
//     var responseString = new Buffer(responseBuffer).toString();
//     response.send(responseString);
// });

app.use('/s', express.static(__dirname + "/s"));


var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
