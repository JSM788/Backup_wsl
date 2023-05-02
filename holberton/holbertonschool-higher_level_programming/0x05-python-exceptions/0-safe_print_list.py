#!/usr/bin/python3

def safe_print_list(my_list=[], x=0):
    count = 0
    for i in my_list[0:x]:
        try:
            print(i, end="")
            count += 1
        except ValueError:
            print("Error")
    print()
    return count
