package ch02.ex01;

import static java.lang.System.out;
import ch02.User;
import config.Configuration;

public class Main {
	public static void main(String[] args) {
		Mapper mapper = Configuration.getMapper(Mapper.class);
		
		out.println("[getUsers]");
		for(User user: mapper.getUsers()) out.println(user);
	}
}