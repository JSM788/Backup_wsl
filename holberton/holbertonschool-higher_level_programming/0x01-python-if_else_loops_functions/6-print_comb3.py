#!/usr/bin/python3

for n in range(9):
    for x in range(10):
        if (x > n):
            if (n != 8):
                print(f"{n}{x}", end=", ")
            else:
                print(f"{n}{x}")
