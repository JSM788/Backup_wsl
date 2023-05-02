#!/usr/bin/env python3
""""""
from flask import Flask, render_template, request
from typing import Any
from flask_babel import Babel

app = Flask(__name__)
babel = Babel(app)


class Config():
    """"""

    LANGUAGES = ["en", "fr"]
    BABEL_DEFAULT_LOCALE = "en"
    BABEL_DEFAULT_TIMEZONE = "UTC"


app.config.from_object(Config)
# print(app.config)


@app.route("/", strict_slashes=False)
def home() -> Any:
    """"""
    title = "Welcome to Holberton"
    h1 = "Hello world"
    return render_template("0-index.html", title=title, h1=h1)


@babel.localeselector
def get_locle() -> Any:
    """"""
    language = request.accept_languages.best_match(app.config["LANGUAGES"])
    areturn language


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
