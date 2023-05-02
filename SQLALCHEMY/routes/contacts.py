from flask import Blueprint, render_template, request
from models.contact import Contact
from utils.db import db

contacts = Blueprint("contacts", __name__)

@contacts.route("/")
def home():
    return render_template("index.html")

@contacts.route("/new", methods=["POST"])
def add_contact():
    fullname = request.form["fullname"]
    phone = request.form["phone"]

    new_contact = Contact(fullname, phone)

    print(new_contact)

    return "saving a contact"

@contacts.route("/update")
def aupdate():
    return "update a contact"

@contacts.route("/about")
def about():
    return render_template("about.html")
