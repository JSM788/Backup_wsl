#!/usr/bin/python3
"""This function prints text and makes a line break after these characters"""


def text_indentation(text):
    """
    Function that allows to make a line break when ignoring the characters
    """
    if (type(text) is not str):
        raise TypeError("text must be a string")

    flag = 0
    for x in text:
        if flag == 0:
            if (x == ' '):
                continue
            else:
                flag = 1

        if flag == 1:
            if x == '.' or x == '?' or x == ':':
                print(x + "\n")
                flag = 0
            else:
                print(x, end="")
