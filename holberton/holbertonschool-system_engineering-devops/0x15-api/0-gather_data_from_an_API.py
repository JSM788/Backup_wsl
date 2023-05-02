#!/usr/bin/python3
"""Write a Python script that, using a REST API, for a given
employee ID, returns information about his/her TODO list progress."""
import requests
from sys import argv

if __name__ == "__main__":
    url = "https://jsonplaceholder.typicode.com/users"
    url2 = "https://jsonplaceholder.typicode.com/todos"
    response = requests.get(url)
    response2 = requests.get(url2)

    data = response.json()
    data2 = response2.json()

    number = int(argv[1])
    txt = "Employee {} is done with tasks".format(data[number - 1]["name"])
    count = 0
    count2 = 0
    lens = len(data2)

    for x in range(lens):
        if int(data2[x]["userId"]) == number:
            count2 += 1

    for i in range(lens):
        if data2[i]["userId"] == number and data2[i]["completed"] is True:
            count += 1
    print("{}({}/{}):".format(txt, count, count2))

    for i in range(lens):
        if data2[i]["userId"] == number and data2[i]["completed"] is True:
            print("\t " + data2[i]["title"])
