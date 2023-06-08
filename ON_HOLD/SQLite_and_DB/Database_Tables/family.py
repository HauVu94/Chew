from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///chew.db'
db = SQLAlchemy(app)


class Family(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    familyId = db.Column(db.Integer)
    lastName = db.Column(db.String(100))

    def __init__(self, familyId, lastName):
        self.familyId = familyId
        self.lastName = lastName


if __name__ == '__main__':
    app.run()
