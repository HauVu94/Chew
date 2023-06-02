from Backend.Database_Tables import user
import userDao



test = user.User("Ape", "Mamma", "ApeBaby665", 66644)

dao = userDao.UserDao()

dao.save(test)
print(test)

user = dao.retriveByUsername("ApeBaby665")
dao.retriveById(1)

print(user)


