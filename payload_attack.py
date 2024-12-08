import requests

# Example of Custom Headers and Payload
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
    'Accept': '*/*',
    'Connection': 'keep-alive'
}

payload = {
    'data': 'example_payload_data'
}

response = requests.post('http://example.com/api', data=payload, headers=headers)
print(response.status_code)