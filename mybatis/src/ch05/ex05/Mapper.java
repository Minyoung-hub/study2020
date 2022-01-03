package ch05.ex05;

import java.util.List;
import ch05.User;

public interface Mapper {
	List<User> getUsers(String userName);
}
