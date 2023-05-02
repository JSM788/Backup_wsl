#!/usr/bin/env python3
"""Defining a coroutine that will execute async_comprehension
four times in parallel using asyncio.gather"""
import asyncio
import time

async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """This function measures total execution time and returns it"""
    tasks = [asyncio.create_task(async_comprehension()) for i in range(4)]
    start = time.time()
    await asyncio.gather(*tasks)
    end = time.time()
    total = end - start
    return total
