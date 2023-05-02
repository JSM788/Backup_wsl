#!/usr/bin/python3
"""This is a query from a reddit api"""

import requests


def recurse(subreddit, hot_list=[]):
    """Prints the titles of the top 10 most popular posts"""
    url = "https://www.reddit.com/r/{}/hot.json".format(subreddit)
    headers = {'User-agent': 'Mozilla/5.0'}
    response = requests.get(url, headers=headers)
    if response.status_code != 200:
        print(None)
    else:
        count = 0
        result = response.json().get("data")
        for c in result.get("children"):
            hot_list.append(c.get("data").get("title"))
        print(len(hot_list))
