/**
 * io.js
 *
 * Description:
 *  file for WebSocket
 *
 * Author:
 *  sota1235
 */

var socket = require('socket.io');

module.exports = function(server) {
  var io = socket.listen(server);

  io.on('connection', function(socket) {
    console.log('a user connected');

    socket.on('comment', function(msg) {
      console.log('comment: ' + msg);
      io.emit('comment', msg);
    });

    socket.on('vote', function(msg) {
      console.log('vote: ' + msg);
      io.emit('vote', msg);
    });

    socket.on('open', function(msg) {
      console.log('open: ' + msg);
      io.emit('open', msg);
    });
  });
};
