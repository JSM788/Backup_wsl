#!/usr/bin/python3
"""Function that returns an object represented/
by a JSON"""
import json


def from_json_string(my_str):
    """Return as python"""

    return json.loads(my_str)
