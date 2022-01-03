package ch05.ex04;

import ch05.User;
import config.Configuration;

public class Main {
	public static void main(String[] args) {
		Mapper mapper = Configuration.getMapper(Mapper.class);
		
		System.out.println(mapper.updateUser(new User(2, "abel", null))+ "건 처리 완료.");
	}
}