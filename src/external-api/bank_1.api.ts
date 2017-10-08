const bank_1_app = require('express')();
const bank_1_http = require('http').Server(bank_1_app);
const bank_1_path = require('path');
const bank_1_port =  3001;

bank_1_app.get('/', function(req, res) {
    setTimeout(() => {
        res.send({
            bank: 'Bank 1',
            account: {
                name: 'Account 1',
                number: 'NDA12431'
            },
            currency: 'USD'
        })
    }, 1000);
});

bank_1_http.listen(bank_1_port, () => console.log('listening on port ' + bank_1_port));