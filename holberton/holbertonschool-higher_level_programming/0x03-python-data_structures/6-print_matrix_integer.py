#!/usr/bin/python3

def print_matrix_integer(matrix=[[]]):
    for r in matrix:
        for x in r:
            if x != r[-1]:
                print(f"{x} ", end="")
            else:
                print(f"{x}", end="")
        print()
