
const server_app = require('express')();
const server_http = require('http').Server(server_app);
const server_io = require('socket.io')(server_http);
const server_port = 3300;

import { Request } from './request';

function onConnection(socket) {
	const request: Request = new Request();

	socket.on('getAccounts', (token) => {
		request.getAccounts('http://localhost:3001').then((accounts) => {
			server_io.emit('accounts', accounts);
		});

		request.getAccounts('http://localhost:3002').then((accounts) => {
			server_io.emit('accounts', accounts);
		});

		request.getAccounts('http://localhost:3003').then((accounts) => {
			server_io.emit('accounts', accounts);
		});
	});
}

server_io.on('connection', onConnection);

server_http.listen(server_port, () => console.log('listening on port ' + server_port));