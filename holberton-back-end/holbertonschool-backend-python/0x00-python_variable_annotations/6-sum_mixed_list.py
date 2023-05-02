#!/usr/bin/env python3
"""Defining the function to_str"""
from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """Returns their sum of the list as a float"""
    result = sum(mxd_lst)
    return float(result)
