/*  MIT License: https://webrtc-experiment.appspot.com/licence/ -- https://github.com/muaz-khan */

var io = require('socket.io').listen(9002);
io.sockets.on('connection', function (socket) {
  if (!io.connected) io.connected = true;

  socket.on('new-channel', function (data) {
    onNewNamespace(socket, data.channel, data.sender);
  });
});

function onNewNamespace(socket, channel, sender) {
  io.of('/' + channel).on('connection', function (socket) {
    if (io.isConnected) {
      io.isConnected = false;
      socket.emit('connect', true);
    }

    socket.on('message', function (data) {
      if (data.sender == sender) socket.broadcast.emit('message', data.data);
    });
  });
}
