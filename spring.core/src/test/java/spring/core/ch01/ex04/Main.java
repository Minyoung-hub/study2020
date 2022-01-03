package spring.core.ch01.ex04;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Main {
	public static void main(String[] args) {
		ApplicationContext ctx = new ClassPathXmlApplicationContext("app.xml", Main.class);
		
		Shooter shooter = ctx.getBean("shooter", Shooter.class); // Bean의 ID는 Class를 따라간다. Class이름에서 첫글자가 소문자인걸로 ID가 결정된다.
		shooter.fire();
	}
}