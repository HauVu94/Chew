from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///chew.db'
db = SQLAlchemy(app)


class Recipe(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    recipeId = db.Column(db.Integer)
    name = db.Column(db.String(100))
    description = db.Column(db.String(200))

    def __init__(self, recipeId, name, description):
        self.recipeId = recipeId
        self.name = name
        self.description = description


if __name__ == '__main__':
    app.run()
