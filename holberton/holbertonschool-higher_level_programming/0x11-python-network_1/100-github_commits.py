#!/usr/bin/python3
"""Write a Python script that takes 2 arguments in order
to solve this challenge"""

if __name__ == "__main__":
    import requests
    from sys import argv
    url = "https://api.github.com/repos/{}/{}/commits".format(argv[2], argv[1])

    r = requests.get(url)
    js = r.json()
    for i in js[0:10]:
        print("{}: {}".format(i.get("sha"),
              i.get("commit").get("author").get("name")))
