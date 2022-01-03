package spring.core.ch02.ex01;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import spring.core.ch02.ex01.user.service.UserService;
import spring.core.ch02.ex01.user.stock.service.StockService;

public class Main {
	public static void main(String[] args) {
		ApplicationContext ctx = new ClassPathXmlApplicationContext("app.xml", Main.class);
		
		UserService userService = ctx.getBean("userService", UserService.class);
		StockService stockService = ctx.getBean("stockService", StockService.class);
		
		//userService.getUserCnt();
		//userService.getUserName();
		userService.setUserName("john");
	}
}