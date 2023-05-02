#!/usr/bin/python3
"""The function write or overwrite the content/
of the file"""


def write_file(filename="", text=""):
    """Writing the text"""

    with open(filename, "w", encoding="utf-8") as f:
        write_data = f.write(text)
        return(write_data)
