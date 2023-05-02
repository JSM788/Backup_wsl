#!/usr/bin/python3
"""Making class Mylist"""


class MyList(list):
    """Sort the list"""

    def print_sorted(self):
        print(sorted(self))
