#!/usr/bin/python3
"""The function reads text"""


def read_file(filename=""):
    """Reading the text"""

    with open(filename, "r", encoding="utf-8") as f:
        read_data = f.read()
    print(read_data, end="")
