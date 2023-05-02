#!/usr/bin/python3
"""Using what you did in the task #0, extend your Python script
to export data in the CSV format."""
import csv
import requests
from sys import argv

if __name__ == "__main__":
    arg = int(argv[1])
    url = requests.get("https://jsonplaceholder.typicode.com/users/{}"
                       .format(arg))
    url2 = requests.get("https://jsonplaceholder.typicode.com/users/{}/todos"
                        .format(arg))

    ids = url.json()["id"]
    name = url.json()["username"]
    f = "{}.csv".format(arg)
    with open(f, 'w', encoding="utf-8") as file:
        for index in url2.json():
            file.write("\"{}\",\"{}\",\"{}\",\"{}\"\n"
                       .format(ids, name, index["completed"], index["title"]))
