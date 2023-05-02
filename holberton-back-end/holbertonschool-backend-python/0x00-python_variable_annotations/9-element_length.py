#!/usr/bin/env python3
"""Defining the function element_length"""
from typing import Iterable, List, Tuple, Sequence


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """Return values with the appropriate types"""
    return [(i, len(i)) for i in lst]
