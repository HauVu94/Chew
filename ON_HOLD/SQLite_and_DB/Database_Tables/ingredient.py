from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///chew.db'
db = SQLAlchemy(app)


class Ingredient(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    ingredientName = db.Column(db.String(100))

    def __init__(self, ingredientName):
        self.ingredientName = ingredientName


if __name__ == '__main__':
    app.run()
