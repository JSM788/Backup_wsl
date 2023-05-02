#!/usr/bin/python3
""" Function that creates an Object from a JSON file """
import json
import sys
save_to_json_file = __import__('5-save_to_json_file').save_to_json_file
load_from_json_file = __import__('6-load_from_json_file').load_from_json_file

try:
    new_list = load_from_json_file('add_item.json')
except FileNotFoundError:
    save_to_json_file([], 'add_item.json')
finally:
    lis = []
    for i in range(1, len(sys.argv)):
        lis.append(sys.argv[i])
    new_list = load_from_json_file('add_item.json')
    new_list += lis
    save_to_json_file(new_list, 'add_item.json')
