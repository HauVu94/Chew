import os
import sqlite3

# Get the current directory
current_dir = os.path.dirname(os.path.abspath(__file__))

# Create the database file path relative to the current directory
db_file = os.path.join(current_dir, 'chew.sqlite')

# Connect to the database
with sqlite3.connect(db_file) as conn:
    c = conn.cursor()

    # All general database tables are created here
    c.execute("""
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
    """)

    c.execute("""
        CREATE TABLE IF NOT EXISTS member(
            userId INTEGER,
            instituteId INTEGER,
            familyId INTEGER
        )
    """)

    c.execute("""
        CREATE TABLE IF NOT EXISTS family(
            familyId INTEGER,
            lastName TEXT
        )
    """)

    c.execute("""
        CREATE TABLE IF NOT EXISTS institute(
            instituteId INTEGER
        )
    """)

    c.execute("""
        CREATE TABLE IF NOT EXISTS fridge(
            fridgeId INTEGER
        )
    """)

    c.execute("""
        CREATE TABLE IF NOT EXISTS foodItem(
            quantity INTEGER,
            bestBeforeDate INTEGER,
            fridgeId INTEGER,
            ingredientId INTEGER
        )
    """)

    c.execute("""
        CREATE TABLE IF NOT EXISTS ingredient(
            ingredientName TEXT
        )
    """)

    c.execute("""
        CREATE TABLE IF NOT EXISTS ingredientQuantity(
            quantity INTEGER,
            recipeId INTEGER
        )
    """)

    c.execute("""
        CREATE TABLE IF NOT EXISTS recipe(
            recipeId INTEGER,
            name TEXT,
            description TEXT
        )
    """)
    # End of general database tables

    # Database tables for profile page are created here
    c.execute("""
        CREATE TABLE IF NOT EXISTS profileBadges(
            badgeId INTEGER,
            badgeIcon BLOB,
            description TEXT
        )
    """)

    # Database tables for shopping cart
    c.execute("""
           CREATE TABLE IF NOT EXISTS shoppingcart(
               cartId INTEGER,
                
               description TEXT
           )
       """)
    conn.commit()

    # Insert values into the user table
    c.execute(
        "INSERT INTO user VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        ('0', 'Marcus', 'Cin', 250800, 'test@mail.com', '12345678', 'Teacher', 'pfpic.jpeg')
    )

    # Retrieve and print data from the user table
    c.execute("SELECT * FROM user")
    rows = c.fetchall()
    for row in rows:
        print(row)

    conn.commit()
