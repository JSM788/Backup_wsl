#!/usr/bin/env python3
"""Defining the function safe_first_element"""
from typing import Sequence, Any, Union


def safe_first_element(lst: Sequence[Any]) -> Union[Any, None]:
    """Duck-typed annotations"""
    if lst:
        return lst[0]
    else:
        return None
