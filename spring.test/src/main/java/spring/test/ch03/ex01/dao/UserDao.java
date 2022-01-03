package spring.test.ch03.ex01.dao;

import java.util.List;

import spring.test.ch03.ex01.domain.User;

public interface UserDao {
	List<User> getUsers();
	int update(User user);
}
