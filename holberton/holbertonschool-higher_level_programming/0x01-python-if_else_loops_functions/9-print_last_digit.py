#!/usr/bin/python3
def print_last_digit(number):

    if number >= 0:
        var = number % 10
    else:
        var = abs(number) % 10
    print(var, end='')
    return var
