package ch05.ex03;

import java.util.List;

import ch05.Search;
import ch05.User;

public interface Mapper {
	List<User> getUsers(Search search);
}
