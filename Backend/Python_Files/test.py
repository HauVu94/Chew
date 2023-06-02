import user
import userDao



test = user.User("Ape", "Mamma", 66644)

dao = userDao.UserDao()

dao.save(test)
print(test)
