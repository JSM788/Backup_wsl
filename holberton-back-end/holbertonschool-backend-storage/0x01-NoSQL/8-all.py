#!/usr/bin/env python3
"""Defining the list_all method"""

def list_all(mongo_collection):
    """This function lists all documents in a collection"""
    result = []
    cursor = mongo_collection.find()
    for document in cursor:
        result.append(document)
    return result
