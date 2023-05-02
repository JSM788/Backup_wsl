#!/usr/bin/python3
def max_integer(my_list=[]):

    lens = len(my_list)
    if lens == 0:
        return None
    else:
        new_list = sorted(my_list)
        return(new_list[-1])
