#!/usr/bin/python3
"""This script takes in a URL and an email, sends a POST request
to the passed URL with the email as a parameter, and displays
the body of the response"""
if __name__ == "__main__":
    import urllib.request
    from urllib.error import HTTPError
    import sys

    try:
        url = sys.argv[1]
        with urllib.request.urlopen(url) as response:
            print(response.read().decode('utf-8'))
    except HTTPError as error:
        print("Error code: {}".format(error.code))
