#!/usr/bin/env python3
""""""
from base_caching import BaseCaching


class LRUCache(BaseCaching):
    """"""

    def __init__(self):
        super().__init__()
        self.keys = []
        self.count = {}

    def put(self, key, item):
        """Upgrade to BaseCaching"""
        if key is None or item is None:
            return
        self.cache_data[key] = item
        

    def get(self, key):
        """Get an item based on a key"""
        if key is None:
            return None
        # get() returns None if it doesn't find the key
        self.count[key] = 1
        print(self.count)
        return self.cache_data.get(key)
