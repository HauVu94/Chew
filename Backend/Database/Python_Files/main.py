from db_connector import chewDb

from flask import Flask, render_template, request, redirect, url_for, session
import mysql.connector
from mysql.connector import Error

app = Flask(__name__)

# Change this to your secret key (it can be anything, it's for extra protection)
app.secret_key = 'your secret key'

# Enter your database connection details below
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'chew_db'

# Intialize MySQL
def create_connection():
    try:
        connection = mysql.connector.connect(
            host=app.config['MYSQL_HOST'],
            user=app.config['MYSQL_USER'],
            password=app.config['MYSQL_PASSWORD'],
            database=app.config['MYSQL_DB']
        )
        print("MySQL Database connection successful")
        return connection
    except Error as e:
        print(f"The error '{e}' occurred while connecting to MySQL database")
        return None

# http://localhost:3000/RegisterPage/ - the following will be our login page, which will use both GET and POST requests
@app.route('/LoginPage/', methods=['GET', 'POST'])
def login():
    # Output a message if something goes wrong...
    msg = ''
    # Check if "username" and "password" POST requests exist (user submitted form)
    if request.method == 'POST' and 'username' in request.form and 'password' in request.form:
        # Create variables for easy access
        username = request.form['username']
        password = request.form['password']
        # Check if account exists using MySQL
        connection = create_connection()
        if connection:
            cursor = connection.cursor(dictionary=True)
            cursor.execute('SELECT * FROM user WHERE username = %s AND password = %s', (username, password,))
            # Fetch one record and return result
            user = cursor.fetchone()
            # If account exists in user table in our database
            if user:
                # Create session data, we can access this data in other routes
                session['loggedin'] = True
                session['id'] = user['id']
                session['username'] = user['username']
                # Redirect to home page
                return 'Logged in successfully!'
            else:
                # Account doesn't exist or username/password incorrect
                msg = 'Incorrect username/password!'
        else:
            msg = 'Failed to connect to the database'
    # Show the login form with message (if any)
    return render_template('index.html', msg=msg)


