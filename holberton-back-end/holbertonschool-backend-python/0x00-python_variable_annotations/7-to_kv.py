#!/usr/bin/env python3
"""Defining the function to_kv"""
from typing import Union, Tuple, Iterable


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Returns a tuple"""
    return k, v * v
