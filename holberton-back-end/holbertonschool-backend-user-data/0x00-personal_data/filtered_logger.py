#!/usr/bin/env python3
""""""
import os
import re
import logging
from typing import Union, Tuple, List
import mysql.connector

PII_FIELDS = ("name", "email", "phone", "ssn", "ip")
PERSONAL_DATA_DB_USERNAME = "root"
PERSONAL_DATA_DB_PASSWORD = ""
PERSONAL_DATA_DB_HOST = "localhost"
PERSONAL_DATA_DB_NAME = ""


class RedactingFormatter(logging.Formatter):
    """ Redacting Formatter class
        """

    REDACTION = "***"
    FORMAT = "[HOLBERTON] %(name)s %(levelname)s %(asctime)-15s: %(message)s"
    SEPARATOR = ";"

    def __init__(self, fields: Union[Tuple[str], List[str]]):
        super(RedactingFormatter, self).__init__(self.FORMAT)
        self.fields = fields

    def format(self, record: logging.LogRecord) -> str:
        """This function formats a text"""
        """leaked_data = filter_datum(self.fields,
        self.REDACTION, record.msg, self.SEPARATOR)"""
        """return "[HOLBERTON] {} {} {}: {}".format(record.name,
        record.levelname, "2019-11-19 18:24:25,105", leaked_data)"""
        return filter_datum(self.fields, self.REDACTION, super()
                            .format(record), self.SEPARATOR)


def filter_datum(fields: List[str],
                 redaction: str, message: str, separator: str) -> str:
    """This function hides the password and birthday of a user"""
    for field in fields:
        password = finder(message, field)
        message = re.sub(password, redaction, message)
    return message


def finder(message, field):
    """This function search and replace a field"""
    match = re.search(r"{}=(\w+\@?\w+\.?\-?\/?\w+\-?\/?\w+)"
                      .format(field), message)
    match = match.group(1)
    return match


def get_logger() -> logging.Logger:
    """"""
    logger = logging.getLogger("user_data")
    logger.setLevel(logging.INFO)
    handler = logging.StreamHandler()
    handler.setFormatter(RedactingFormatter(list(PII_FIELDS)))
    logger = logging.addHandler(handler)
    return logger


def get_db() -> mysql.connector.connection.MySQLConnection:
    """"""
    connection = mysql.connector.connect(
            user=os.environ["PERSONAL_DATA_DB_USERNAME"],
            password=os.environ["PERSONAL_DATA_DB_PASSWORD"],
            host=os.environ["PERSONAL_DATA_DB_HOST"],
            database=os.environ["PERSONAL_DATA_DB_NAME"]
            )
    return connection


