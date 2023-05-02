#!/usr/bin/python3
"""
starts a Flask web application
"""

from flask import Flask, render_template
app = Flask(__name__)


@app.route('/<number>', strict_slashes=False)
def index(number):
    """returns Hello HBNB!"""
    
    return render_template("{}-main.html".format(number))


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port='5000')
