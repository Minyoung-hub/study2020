package ch05.ex02;

import ch05.Post;
import ch05.Search;
import config.Configuration;

public class Main {
	public static void main(String[] args) {
		Mapper mapper = Configuration.getMapper(Mapper.class);
		
		System.out.println(mapper.getUsers(
				new Search("john", new Post(null, "고리"))));
	}
}