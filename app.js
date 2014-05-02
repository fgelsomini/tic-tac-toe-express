var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.sendfile('public/index.html');
});

app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 3000;
var server = app.listen(port, function() {
    console.log('Listening on port %d', server.address().port);
});

