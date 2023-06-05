from Backend.SQLite.Database_Tables import user
import userDao



test = user.User("Ape", "Mamma", "ApeBaby665", 66644)

dao = userDao.UserDao()

print(test)

user = dao.retriveByUsername("ApeBaby665")

print(user)


