from mysql import connector
import json
from pathlib import Path

# Gets password from
"""
    1. Create txt file named password.txt
    2. Add your password on the first line
    3. REMEMBER TO 
        A. RIGHT CLICK
        B. GO TO GIT
        C. ADD TO GIT IGNORE
"""


def getDb():
    password = Path("password.txt").open().readline().strip()

    Db = connector.connect(
        host="127.0.0.1",
        user="root",
        password=password,
        auth_plugin='mysql_native_password',
        database='test'
    )
    return Db


def cursor():
    return getDb().cursor()
