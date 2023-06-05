from flask import Flask
import json

usertable = [{'id': 1,
             'firstName': 'Håvar',
              'lastName': 'Karlsen',
              'userName': 'BigBoyxoxo',
              'password': 334},
             {'id': 1,
             'firstName': 'Lars',
              'lastName': 'Monsen',
              'userName': 'DoggyMan',
              'password': 4330}]

app = Flask("Chew")


@app.route('/')
def index():
    return json.dumps(usertable)


app.run()
