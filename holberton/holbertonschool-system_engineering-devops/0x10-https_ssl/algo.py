#!/usr/bin/python3
""""""
from fabric.operations import local

def do_pack():
    local("mkdir -p versions")
