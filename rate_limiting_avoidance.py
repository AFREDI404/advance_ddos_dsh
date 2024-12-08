import time
import requests

url = 'http://example.com'

def attack_with_throttle():
    for _ in range(100):
        response = requests.get(url)
        print(response.status_code)
        time.sleep(0.5)  # Adding delay between requests to avoid rate limit

attack_with_throttle()