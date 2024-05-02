#!/usr/bin/python3
"""
Fetch https://intranet.hbtn.io/status using the urllib package.
"""
import urllib.request

if __name__ == '__main__':
    # Create a request object with a user-agent header
    req = urllib.request.Request(
        'https://intranet.hbtn.io/status',
        headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'}
    )

    with urllib.request.urlopen(req) as request:
        response = request.read()
        print("Body response:")
        print("\t- type: {}".format(type(response)))
        print("\t- content: {}".format(response))
        print("\t- utf8 content: {}".format(response.decode('UTF-8')))
