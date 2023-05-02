#!/usr/bin/env python3
"""Take the code from wait_n and alter it into a new function task_wait_n"""
from typing import List
import asyncio

task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """Returns a code identical to wait_n"""
    array = []
    result = []
    for i in range(n):
        delay = task_wait_random(max_delay)
        array.append(delay)
    for i in asyncio.as_completed(array):
        result.append(await i)
    return result
