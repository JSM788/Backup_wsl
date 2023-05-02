#!/usr/bin/python3
"""This is a query from a reddit api"""

import requests


def top_ten(subreddit):
    """Prints the titles of the top 10 most popular posts"""
    url = "https://www.reddit.com/r/{}/hot.json".format(subreddit)
    headers = {'User-agent': 'Mozilla/5.0'}
    response = requests.get(url, headers=headers)
    if response.status_code != 200:
        print(None)
    else:
        result = response.json().get("data").get("children")
        for post in range(0, 10):
            print(result[post].get("data").get("title"))
