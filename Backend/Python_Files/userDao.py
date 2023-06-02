import db_connector

class UserDao:

    def save(self, user):

        tupUser = (user.firstName, user.lastName, user.password)

        sqlStatement ="INSERT INTO User (firstName, lastName, password) VALUES (%s, %s, %s)"

        db_connector.mycursor.execute(sqlStatement, tupUser)
        db_connector.chewDb.commit()


    def retrive(self, id):

        sqlStatement = "SELECT * FROM User"

        db_connector.mycursor.execute(sqlStatement)
        result = db_connector.mycursor.fetchall()

        for row in result:
            print(row)





