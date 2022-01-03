package spring.core.ch02.ex01.user.dao;

import org.springframework.stereotype.Repository;

@Repository
public class UserDaoImpl implements UserDao{
	@Override
	public int getUserCnt() {
		return 3;
	}

	@Override
	public String getUserName() {
		return "john";
	}

	@Override
	public void setUserName(String userName) {
		System.out.println(userName);
	}
}
