from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///chew.db'
db = SQLAlchemy(app)


class Member(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer)
    instituteId = db.Column(db.Integer)
    familyId = db.Column(db.Integer)

    def __init__(self, userId, instituteId, familyId):
        self.userId = userId
        self.instituteId = instituteId
        self.familyId = familyId


if __name__ == '__main__':
    app.run()
