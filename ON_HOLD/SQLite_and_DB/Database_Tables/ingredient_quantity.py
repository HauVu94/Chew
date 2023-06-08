from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///chew.db'
db = SQLAlchemy(app)


class IngredientQuantity(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    quantity = db.Column(db.Integer)
    recipeId = db.Column(db.Integer)

    def __init__(self, quantity, recipeId):
        self.quantity = quantity
        self.recipeId = recipeId


if __name__ == '__main__':
    app.run()
