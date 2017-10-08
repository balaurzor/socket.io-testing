var server_app = require('express')();
var server_http = require('http').Server(server_app);
var server_io = require('socket.io')(server_http);
var server_port = 3300;
function onConnection(socket) {
    console.log('somebody connected');
    socket.on('getAccounts', function (token) {
        server_io.emit('accounts', 'hey');
    });
}
server_io.on('connection', onConnection);
server_http.listen(server_port, function () { return console.log('listening on port ' + server_port); });
