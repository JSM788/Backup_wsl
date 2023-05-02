#!/usr/bin/python3
"""Using what you did in the task #0, extend your Python script
to export data in the CSV format."""
import json
import requests
from sys import argv

if __name__ == "__main__":
    arg = int(argv[1])
    url = requests.get("https://jsonplaceholder.typicode.com/users/{}"
                       .format(arg))
    url2 = requests.get("https://jsonplaceholder.typicode.com/users/{}/todos"
                        .format(arg))

    name = url.json()["username"]
    lis = []
    dic = {}
    for index in url2.json():
        dic = {"task": index["title"],
               "completed": index["completed"],
               "username": name}
        lis.append(dic)

    dic = {str(arg): lis}
    f = "{}.json".format(arg)
    with open(f, 'w', encoding="utf-8") as file:
        json.dump(dic, file)
