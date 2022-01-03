package ch02.ex04;

import java.sql.Date;

import ch02.User;
import config.Configuration;

public class Main {
	public static void main(String[] args) {
		Mapper mapper = Configuration.getMapper(Mapper.class);
		
		System.out.print("[updateUser]: ");
		int cnt = mapper.updateUser(new User(11,"King", Date.valueOf("2020-01-02")));
		if(cnt>0) System.out.print("성공.");
	}
}