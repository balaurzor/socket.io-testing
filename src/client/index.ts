const client_app = require('express')();
const client_http = require('http').Server(client_app);
const path = require('path');
const client_port =  3000;

client_app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

client_http.listen(client_port, () => console.log('listening on port ' + client_port));