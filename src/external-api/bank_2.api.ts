const bank_2_app = require('express')();
const bank_2_http = require('http').Server(bank_2_app);
const bank_2_path = require('path');
const bank_2_port =  3002;

bank_2_app.get('/', function(req, res) {
    setTimeout(() => {
        res.send({
            bank: 'Bank 2',
            account: {
                name: 'Account 2',
                id: 'NDA12432'
            },
            currency: {
                name: 'SEK',
                label: 'Danish Kroner'
            }
        })
    }, 5000);
});

bank_2_http.listen(bank_2_port, () => console.log('listening on port ' + bank_2_port));