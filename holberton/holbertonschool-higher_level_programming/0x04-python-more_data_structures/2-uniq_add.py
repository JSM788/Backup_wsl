#!/usr/bin/python3

def uniq_add(my_list=[]):
    uniq_sum = 0
    new_list = []
    uniq_numbers = set(my_list)
    for i in uniq_numbers:
        uniq_sum = uniq_sum + i
    return(uniq_sum)
