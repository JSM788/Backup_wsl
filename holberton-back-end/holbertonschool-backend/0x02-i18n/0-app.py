#!/usr/bin/env python3
""""""
from flask import Flask, render_template
from typing import Any

app = Flask(__name__)


@app.route("/", strict_slashes=False)
def home() -> Any:
    """"""
    title = "Welcome to Holberton"
    h1 = "Hello world"
    return render_template("0-index.html", title=title, h1=h1)


if __name__ == '__main__':
    app.run(host="0.0.0.0", port="5000")
