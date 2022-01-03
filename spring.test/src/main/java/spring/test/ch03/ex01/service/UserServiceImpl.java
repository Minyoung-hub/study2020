package spring.test.ch03.ex01.service;

import java.util.List;

import spring.test.ch03.ex01.dao.UserDao;
import spring.test.ch03.ex01.domain.Level;
import spring.test.ch03.ex01.domain.User;

public class UserServiceImpl implements UserService {
   private UserDao userDao;

   public void setUserDao(UserDao userDao) {
      this.userDao = userDao;
   }

   @Override
   public void upgradeLevels() {
      List<User> users = userDao.getUsers();
      for(User user : users) {
         if(canUpgradeLevel(user)) upgradeLevel(user);
      }
   }
   
   private boolean canUpgradeLevel(User user) {
      Level currLevel = user.getLevel();
      boolean result = false;
      
      switch(currLevel){
      case BASIC: result = user.getLoginCnt() >= 10; break;
      case SILVER: result = user.getLoginCnt() >= 20; break;
      case GOLD: result = false;
      }
      
      return result;
   }
   
   private void upgradeLevel(User user) {
	   user.upgradeLevel();
	   userDao.update(user);
   }
}