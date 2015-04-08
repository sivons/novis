var express = require("express");

var server = express();
server.use(express.static(__dirname + '/www'));
server.use('/bower_components', express.static(__dirname + '/bower_components'));



var port = 9000;

server.listen(port, function(){
  console.log("listening on port " + port);
});
