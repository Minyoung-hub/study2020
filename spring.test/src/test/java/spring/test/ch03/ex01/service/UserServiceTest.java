package spring.test.ch03.ex01.service;

import static org.mockito.Matchers.any;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.junit.Assert.assertThat;
import static org.hamcrest.CoreMatchers.is;


import java.util.Arrays;
import java.util.List;

import org.junit.Before;
import org.junit.Test;

import spring.test.ch03.ex01.dao.UserDao;
import spring.test.ch03.ex01.domain.Level;
import spring.test.ch03.ex01.domain.User;

public class UserServiceTest {
	private List<User> users;
	
	@Before
	public void setUp() {
		users = Arrays.asList(
			new User("최한석", Level.BASIC, 9),
			new User("최판돌", Level.BASIC, 10),
			new User("한아름", Level.SILVER, 19),
			new User("한승일", Level.SILVER, 20),
			new User("라다희", Level.GOLD, 30));
	}
	@Test
	public void upgradeLevels() {
		UserDao userDao = mock(UserDao.class);
		when(userDao.getUsers()).thenReturn(this.users);
		
		UserServiceImpl userService = new UserServiceImpl();
		userService.setUserDao(userDao);
		
		userService.upgradeLevels();
		
		verify(userDao, times(2)).update(any(User.class));
		verify(userDao).update(users.get(1));
		assertThat(users.get(1).getLevel(), is(Level.SILVER));
		verify(userDao).update(users.get(3));
		assertThat(users.get(3).getLevel(), is(Level.GOLD));
		
		assertThat(users.get(0).getLevel(), is(Level.BASIC));
		assertThat(users.get(2).getLevel(), is(Level.SILVER));
		assertThat(users.get(4).getLevel(), is(Level.GOLD));
	}
}