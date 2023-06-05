"""
The terminal have some errors printing which is in solving.
If you wish to check that the database received the correct data check the query console.
"""

# Code block 1: Table creation
import sqlite3

conn = sqlite3.connect('chew.db') #Insert chew.db for file name when done with testing
c = conn.cursor()

# Creates the tables in the database
c.execute("""CREATE TABLE IF NOT EXISTS user(
            id int,
            firstName text,
            lastName text,
            birthDate int,
            email text,
            phone int,
            roles text,
            profilePic blob 
            )""")

c.execute("""CREATE TABLE IF NOT EXISTS member(
            userId int,
            instituteId int,
            familyId int
            )""")

c.execute("""CREATE TABLE IF NOT EXISTS family(
            familyId int,
            lastName text
            )""")

c.execute("""CREATE TABLE IF NOT EXISTS institute(
            instituteId int
            )""")

c.execute("""CREATE TABLE IF NOT EXISTS fridge(
            fridgeId int
            )""")

c.execute("""CREATE TABLE IF NOT EXISTS foodItem(
            quantity int,
            bestBeforeDate int,
            fridgeId int,
            ingredientId int
            )""")

c.execute("""CREATE TABLE IF NOT EXISTS ingredient(
            ingredientName text
            )""")

c.execute("""CREATE TABLE IF NOT EXISTS ingredientQuantity(
            quantity int,
            recipeId int    
            )""")

c.execute("""CREATE TABLE IF NOT EXISTS recipe(
            recipeId int,
            name text,
            description text
            )""")

print("Table creation errors:")
for error in conn.execute("PRAGMA table_info(user)"):
    print(error)

conn.commit()

# Inserts values into the database
c.execute("INSERT INTO user VALUES ('0', 'Marcus', 'Cin', 250800, 'test@mail.com', '12345678', 'Teacher', 'pfpic.jpeg')")

print(c.fetchall())

conn.commit()
conn.close()
