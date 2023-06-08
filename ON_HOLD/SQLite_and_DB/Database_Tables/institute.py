from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///chew.db'
db = SQLAlchemy(app)


class Institute(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    instituteId = db.Column(db.Integer)

    def __init__(self, instituteId):
        self.instituteId = instituteId


if __name__ == '__main__':
    app.run()
