#!/usr/bin/env python3
"""Defining the function make_multiplier"""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """Returns a function that multiply a float by multiplier"""
    return lambda x: multiplier * x
