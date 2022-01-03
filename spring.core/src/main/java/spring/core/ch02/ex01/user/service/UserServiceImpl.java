package spring.core.ch02.ex01.user.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import spring.core.ch02.ex01.user.dao.UserDao;

@Service("userService")
public class UserServiceImpl implements UserService{
	@Autowired private UserDao userDao;
	
	@Override
	public int getUserCnt() {
		return userDao.getUserCnt();
	}

	@Override
	public String getUserName() {
		return userDao.getUserName();
	}

	@Override
	public void setUserName(String userName) {
		userDao.setUserName(userName);
	}
}