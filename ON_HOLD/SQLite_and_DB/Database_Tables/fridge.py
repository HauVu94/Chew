from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///chew.db'
db = SQLAlchemy(app)


class Fridge(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    fridgeId = db.Column(db.Integer)

    def __init__(self, fridgeId):
        self.fridgeId = fridgeId


if __name__ == '__main__':
    app.run()
