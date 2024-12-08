import random
import requests

# List of servers to attack
servers = [
    'http://server1.com',
    'http://server2.com',
    'http://server3.com'
]

def send_attack():
    target = random.choice(servers)
    response = requests.get(target)
    print(f"Sent attack to {target}, Status: {response.status_code}")

# Example usage
send_attack()