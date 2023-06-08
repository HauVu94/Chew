from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///chew.db'
db = SQLAlchemy(app)


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    firstName = db.Column(db.String(30))
    lastName = db.Column(db.String(30))
    username = db.Column(db.String(30))
    password = db.Column(db.String(50))

    def __init__(self, firstName, lastName, username, password):
        self.firstName = firstName
        self.lastName = lastName
        self.username = username
        self.password = password


if __name__ == '__main__':
    app.run()
