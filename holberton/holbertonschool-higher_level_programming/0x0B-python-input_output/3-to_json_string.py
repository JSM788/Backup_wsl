#!/usr/bin/python3
"""Function that returns the JSON representation/
of an object"""
import json


def to_json_string(my_obj):
    """Return as JSON"""

    return json.dumps(my_obj)
