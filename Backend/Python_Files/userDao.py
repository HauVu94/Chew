import db_connector

class UserDao:

    def save(self, user):

        tupUser = (user.firstName, user.lastName, user.username, user.password)

        sqlStatement ="INSERT INTO User (firstName, lastName, username, password) VALUES (%s, %s, %s, %s)"

        db_connector.mycursor.execute(sqlStatement, tupUser)
        db_connector.chewDb.commit()


    def retriveById(self, id):
        tupId = (id, )

        sqlStatement = "SELECT * FROM User WHERE id = %s"

        db_connector.mycursor.execute(sqlStatement, tupId)
        result = db_connector.mycursor.fetchall()

        for row in result:
            print(row)


    def retriveByUsername(self, username):
        tupUserName = (username, )
        sqlStatement = "SELECT * FROM User WHERE username = %s"

        db_connector.mycursor.execute(sqlStatement, tupUserName)

        return db_connector.mycursor.fetchall().pop()





