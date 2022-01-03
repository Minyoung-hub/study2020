package spring.core.ch02.ex02;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Main {
	public static void main(String[] args) {
		ApplicationContext ctx = new ClassPathXmlApplicationContext("app.xml", Main.class);
		LoginService loginService = ctx.getBean(LoginService.class);
		
		loginService.validateLoginInfo("user", "123");
	}

}
