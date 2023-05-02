#!/usr/bin/python3

def square_matrix_simple(matrix=[]):
    new_list = []
    for i in matrix:
        new_list.append(list(map(lambda x: x ** 2, i)))
    return (new_list)
