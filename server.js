var io = require('socket.io').listen(3000);

io.sockets.on('connection', function (socket) {
  socket.on('put', function (data) {
    socket.broadcast.emit('get', data);
  });

  socket.on('add', function () {
    socket.broadcast.emit('make');
  });
});