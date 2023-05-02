#!/usr/bin/python3
"""
Python script that receives a letter and sends
a POST request to http://0.0.0.0:5000/search_user
with the letter as a parameter
"""

if __name__ == "__main__":
    import requests
    from sys import argv

    if len(argv) is 1:
        argument = ""
    else:
        argument = argv[1]

    r = requests.post("http://0.0.0.0:5000/search_user", data={'q': argument})

    try:
        file_json = r.json()
        if file_json == {}:
            print("No result")

        else:
            print("[{}] {}".format(file_json.get('id'), file_json.get('name')))

    except ValueError:
        print("Not a valid JSON")
