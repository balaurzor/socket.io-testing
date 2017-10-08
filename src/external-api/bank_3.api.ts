const bank_3_app = require('express')();
const bank_3_http = require('http').Server(bank_3_app);
const bank_3_path = require('path');
const bank_3_port =  3003;

bank_3_app.get('/', function(req, res) {
    setTimeout(() => {
        res.send({
            bank: 'Bank 3',
            account: {
                bankName: 'Bank 3',
                name: 'Account 3',
                id: 'NDA12433'
            },
            ccy: {
                isoName: 'DKK',
                name: 'Danish Kroner'
            }
        })
    }, 10000);
});

bank_3_http.listen(bank_3_port, () => console.log('listening on port ' + bank_3_port));