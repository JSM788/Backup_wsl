#!/usr/bin/python3
"""
Write a function that inserts a
line of text to a file, after each line
containing a specific string (see example)
"""


def append_after(filename="", search_string="", new_string=""):
    """
    method append_after
    """
    with open(filename, "r") as myFile:
        the_file = myFile.readlines()

    with open(filename, "w") as myFile2:
        string = ""

        for i in the_file:
            string += i
            if search_string in i:
                string += new_string

        myFile2.write(string)
