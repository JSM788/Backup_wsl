#!/usr/bin/env python3
""""""
import bcrypt

def hash_password(password: str) -> bytes:
    """This function encrypts a password"""
    salt = bcrypt.gensalt()
    return bcrypt.hashpw(password.encode('utf-8'), salt)

def is_valid(hashed_password: bytes, password: str) -> bool:
    """This function checks if the two passwords match"""
    return bcrypt.checkpw(password.encode('utf-8'), hashed_password)
