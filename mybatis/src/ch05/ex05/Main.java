package ch05.ex05;

import config.Configuration;

public class Main {
	public static void main(String[] args) {
		Mapper mapper = Configuration.getMapper(Mapper.class);
		
		System.out.println(mapper.getUsers("king"));
	}
}