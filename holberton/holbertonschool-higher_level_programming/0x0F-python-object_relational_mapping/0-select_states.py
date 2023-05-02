#!/usr/bin/python3
"""
List all states from the database hbtn_0e_0_usa
"""
import MySQLdb
from sys import argv

if __name__ == "__main__":

    db = MySQLdb.connect(
        user=argv[1],
        passwd=argv[2],
        db=argv[3],
        host='localhost',
        port=3306)

    cursor = db.cursor()
    cursor.execute("SELECT * FROM states ORDER BY states.id;")

    rows = cursor.fetchall()
    for row in rows:
        print(row)
