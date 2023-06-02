import user
import userDao



test = user.User("ole", "christian", 123)

dao = userDao.UserDao()

dao.save(test)
print(test)
