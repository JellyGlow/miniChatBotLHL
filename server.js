//this file allows you to have direct output feedback in terminal.

//you just write $ node <filename.js> and it runs your file with output in the terminal itself

var express = require('express');
var app = express();

var http = require('http');
var server = http.Server(app);

//these first few lines were loading external modules.

app.use(express.static('client'));

//all external content is from the client folder.

var io = require('socket.io')(server);

io.on('connection', function (socket) {
  socket.on('message', function (msg) {
    io.emit('message', msg);
  });
});

//this last line uses the socket.io library

server.listen(8080, function () {
  console.log('Chat server running');
});

//this last bit gets me a local server port listening at 8080, web address "http://localhost:8080/"

//Note: Ctrl + C to end program running in terminal
