var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var dir = '/HTML/';

app.get('/', function(req, res){
  res.sendFile(__dirname + dir + 'index.html');
});

io.on('connection', function(socket){
    socket.on('chat', function(data){
        console.log(data);
        console.log(data.user +": " + data.message);
        io.emit('chat',data);
    });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});