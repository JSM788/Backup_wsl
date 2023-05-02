#!/usr/bin/python3
"""This script takes in a URL and an email address, sends a POST
request to the passed URL with the email as a parameter,
and finally displays the body of the response"""
if __name__ == "__main__":
    import requests
    from sys import argv

    url = argv[1]
    r = requests.post(url, data={"email": argv[2]})
    print(r.text)
