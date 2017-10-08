var client_app = require('express')();
var client_http = require('http').Server(client_app);
var path = require('path');
var client_port = 3000;
var connection;
client_app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
client_http.listen(client_port, function () { return console.log('listening on port ' + client_port); });
