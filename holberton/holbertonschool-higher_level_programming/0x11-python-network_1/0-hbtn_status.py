#!/usr/bin/python3
"""This script fetches https://intranet.hbtn.io/status"""
if __name__ == "__main__":
    import urllib.request
    with urllib.request.urlopen('https://intranet.hbtn.io/status') as response:
        code = response.read()
        print("Body response:")
        print("\t- type: {}".format(type(code)))
        print("\t- content: {}".format(code))
        print("\t- utf8 content: {}".format(code.decode('utf-8')))
