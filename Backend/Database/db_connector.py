import mysql.connector

# Husk og skrive inn passordet, som tilhører din MySQL om ikke så funker ikke connection.
# Sist Testet av Marcus, Connection funker!
chewDb = mysql.connector.connect(
    host='127.0.0.1',
    user='root',
    password='Ditt_Passord_Her',
    port='3306',
    database='chew_db'
)
