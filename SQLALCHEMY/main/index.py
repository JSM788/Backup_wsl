from app import app
from utils.db import db

with app.app_context():
    db.create_all()
