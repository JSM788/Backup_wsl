from flask import Flask
from routes.contacts import contacts
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)

app.config["SQLALCHEMY_DATABASE_URI"] = "mysql://root:72781128@localhost/sqlalchemy"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False


SQLAlchemy(app)

app.register_blueprint(contacts)




if __name__ == "__main__":
    app.run(debug=True)
