import sqlite3

connection = sqlite3.connect('chew_sqlite.db')

cursor = connection.cursor()

command1 = """
CREATE TABLE IF NOT EXISTS user(
            id INTEGER,
            firstName TEXT,
            lastName TEXT,
            birthDate INTEGER,
            email TEXT,
            phone INTEGER,
            roles TEXT,
            profilePic BLOB
            )
"""
cursor.execute(command1)

command2 = """
CREATE TABLE IF NOT EXISTS member(
            userId INTEGER,
            instituteId INTEGER,
            familyId INTEGER
        )
"""
cursor.execute(command2)

command3 = """
CREATE TABLE IF NOT EXISTS family(
            familyId INTEGER,
            lastName TEXT
        )
"""
cursor.execute(command3)

command4 = """
CREATE TABLE IF NOT EXISTS institute(
            instituteId INTEGER
        )
"""
cursor.execute(command4)

cursor.execute(
    "INSERT INTO user VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
    ('0', 'Marcus', 'Cin', 250800, 'test@mail.com', '12345678', 'Teacher', 'pfpic.jpeg')
)
cursor.execute(
    "INSERT INTO user VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
    ('1', 'Maren', 'uff', 250800, 'maren@mail.com', '87654321', 'Babe', 'pfpic.jpeg')
)

cursor.execute("SELECT * FROM user")

result = cursor.fetchall()
print(result)
