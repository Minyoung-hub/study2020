package ch02.ex02;

import static java.lang.System.out;
import config.Configuration;

public class Main {
	public static void main(String[] args) {
		Mapper mapper = Configuration.getMapper(Mapper.class);
		
		out.println("[getUser]");
		out.println(mapper.getUser(1));
	}
}