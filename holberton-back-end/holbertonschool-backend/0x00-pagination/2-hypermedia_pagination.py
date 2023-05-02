#!/usr/bin/env python3
"""
Pagination file
"""

import csv
import math
from typing import List, Dict


def index_range(page: int, page_size: int) -> tuple:
    """This function returns the starting and ending index of a page"""
    end = page * page_size
    start = end - page_size
    return(start, end)


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """
        This function returns a list with the values of the specified range
        """
        assert isinstance(page, int) and isinstance(page_size, int)
        assert page > 0 and page_size > 0
        ranges = index_range(page, page_size)
        self.dataset()
        result = [row for row in self.__dataset[slice(*ranges)]]
        return result



    def get_hyper(self, page: int = 1, page_size: int = 10) -> Dict:
        """
        This function returns a list with the values of the specified range
        """
        data = self.get_page(page, page_size)
        total_pages = 
        return {"page_size": page_size, "page": page, "data": data, "next_page": 1, "prev_page": 0, "total_pages": total_pages}
