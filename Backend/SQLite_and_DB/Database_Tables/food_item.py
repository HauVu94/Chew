from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///chew.db'
db = SQLAlchemy(app)


class FoodItem(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    quantity = db.Column(db.Integer)
    bestBeforeDate = db.Column(db.Integer)
    fridgeId = db.Column(db.Integer)
    ingredientId = db.Column(db.Integer)

    def __init__(self, quantity, bestBeforeDate, fridgeId, ingredientId):
        self.quantity = quantity
        self.bestBeforeDate = bestBeforeDate
        self.fridgeId = fridgeId
        self.ingredientId = ingredientId


if __name__ == '__main__':
    app.run()
