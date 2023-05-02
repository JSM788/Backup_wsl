#!/usr/bin/python3
"""Using what you did in the task #0, extend your Python script
to export data in the CSV format."""
import json
import requests

if __name__ == "__main__":
    url = "https://jsonplaceholder.typicode.com/"
    all_users = requests.get("{}users/".format(url))
    final_dict = {}

    for id_user in range(1, len(all_users.json()) + 1):
        user = requests.get("{}users/{}".format(url, id_user))
        todo = requests.get("{}users/{}/todos".format(url, id_user))

        name = user.json()["username"]

        lis = []
        dic = {}
        for index in todo.json():
            dic = {"username": name,
                   "task": index["title"],
                   "completed": index["completed"]
                   }
            lis.append(dic)
        final_dict[id_user] = lis

    f = "todo_all_employees.json"
    with open(f, 'w', encoding="utf-8") as file:
        json.dump(final_dict, file)
