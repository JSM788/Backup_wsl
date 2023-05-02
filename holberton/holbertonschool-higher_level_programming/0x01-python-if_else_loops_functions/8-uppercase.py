#!/usr/bin/python3
def uppercase(str):
    for i in str:
        if ord(i) >= 97 and ord(i) <= 123:
            upper = chr(ord(i) - 32)
        else:
            upper = i
        print("{:s}".format(upper), end="")
    print()
