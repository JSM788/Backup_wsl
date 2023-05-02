#!/usr/bin/python3
def remove_char_at(str, n):
    for j in range(len(str)):
        if j == n:
            str = str.replace(str[n], "", 1)
    return str
