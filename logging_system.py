import logging
import requests

# Logging configuration
logging.basicConfig(filename='ddos_attack.log', level=logging.INFO)

def log_attack_status(url):
    logging.info(f"Starting DDoS Attack on: {url}")
    
    response = requests.get(url)
    if response.status_code == 200:
        logging.info(f"Request to {url} successful with status code: {response.status_code}")
    else:
        logging.error(f"Error: {response.status_code} while attacking {url}")

# Example usage
log_attack_status('http://example.com')