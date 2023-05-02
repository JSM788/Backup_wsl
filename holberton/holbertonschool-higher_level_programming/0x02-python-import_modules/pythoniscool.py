#!/usr/bin/python3
import os
s = "#pythoniscool\n"
line = str.encode(s)
os.write(1, line)
