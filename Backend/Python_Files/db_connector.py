import mysql.connector

# Husk og skrive inn passordet, som tilhører din MySQL om ikke så funker ikke connection.
# connecting til database
chewDb = mysql.connector.connect(
    host='127.0.0.1',
    user='root',
    password='Amigo3040hei',
    port='3306',
    database='chew_db',
    auth_plugin='mysql_native_password'
    # Pass på at DB navnet stemmer med det på MySQL
)


mycursor = chewDb.cursor()
