#!/usr/bin/env python

"""
livereload Docs: https://livereload.readthedocs.io/en/latest/
"""

from livereload import Server, shell
import socket
import subprocess # clipboard functionality

server = Server()

ip = socket.gethostbyname(socket.gethostname())
port = 8000
# ip = "192.168.8.104"

# Copy ip to clipboard
subprocess.check_call(f'echo {ip}:{port}|clip', shell=True)
print(f'Copied: {ip}:{port}')

# use custom host and port w live updates
server.serve(port=port, host=ip, open_url=True)

# open the web browser on startup, based on $BROWSER environment variable
# server.serve(open_url=True, debug=False)


