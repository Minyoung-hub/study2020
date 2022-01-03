package ch02.ex03;

import static java.lang.System.out;
import java.sql.Date;
import ch02.User;
import config.Configuration;

public class Main {
	public static void main(String[] args) {
		Mapper mapper = Configuration.getMapper(Mapper.class);
		
		out.print("[addUser]: ");
		int cnt = mapper.addUser(new User(11,null,Date.valueOf("2020-12-02")));
		if(cnt>0) out.print("성공.");
	}
}