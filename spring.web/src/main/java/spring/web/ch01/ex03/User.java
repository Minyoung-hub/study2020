package spring.web.ch01.ex03;

public class User {
	private String name;
	private int age;
	
	public User() {} // 기본 생성자를 준비하자
	
	public User(String name, int age) {
		this.name = name;
		this.age = age;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}
	
	
}
