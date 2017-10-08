
const server_app = require('express')();
const server_http = require('http').Server(server_app);
const server_io = require('socket.io')(server_http);
const server_port = 3300;

function onConnection(socket) {
	console.log('somebody connected');
	socket.on('getAccounts', (token) => {
		server_io.emit('accounts', 'hey');
	});
}

server_io.on('connection', onConnection);

server_http.listen(server_port, () => console.log('listening on port ' + server_port));