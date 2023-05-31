import mysql.connector


db = mysql.connector.connect(
    host='localhost',
    user='root',
    password='password', #Her skal passord skrives inn
    database='chew_db' #Pass på at DB navnet stemmer med det på MySQL
)
mycursor = db.cursor() # allows python code to execute database session


