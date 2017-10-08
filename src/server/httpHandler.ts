const qs = require('qs');
const http = require('http');

export class HTTPHandler {
    constructor() {}

    public execute(url) {
        return new Promise((resolve) => {
            // Set up the request
            const post_req = http.request(url, (res) => {
                let chunks = '';
                res.setEncoding('utf8');

                res.on('data', (chunk) => {
                    chunks += chunk;
                });

                res.on('end', () => {
                    resolve({
                        response: chunks,
                        status: res.statusCode
                    });
                });
            });

            post_req.end();
        });
    }
}
