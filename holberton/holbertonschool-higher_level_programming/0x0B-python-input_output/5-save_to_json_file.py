#!/usr/bin/python3
"""Function that writes an Object to a text file"""
import json


def save_to_json_file(my_obj, filename):
    """Returns the object written in text"""

    with open(filename, "w", encoding="utf-8") as f:
        jsonString = json.dumps(my_obj)
        a = f.write(jsonString)
        return(a)
