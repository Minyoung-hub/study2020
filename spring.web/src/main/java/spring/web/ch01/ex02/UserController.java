package spring.web.ch01.ex02;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/ch01/ex02") // 필수사항
public class UserController {
	@RequestMapping("/1") // user1의 핸들러 주소는 ch01/ex02/1 이 된다.
	public String user1() { // 첫번째 핸들러는 파라미터가 없고, 리턴타입은 String이다. 뷰 만을 리턴하고 있다.
		return "ch01/ex02/user";
	}
	
	@RequestMapping("/2") // user2의 핸들러 주소는 ch01/ex02/2 이 된다.
	public String user2(Model model) { // 두번째 핸들러의 파라미터는 모델이고, 리턴타입은 String이다.
		model.addAttribute("user", new User("최한석", 23)); 
		return "ch01/ex02/user";
	}
	
	@RequestMapping("/3") // user3의 핸들러 주소는 ch01/ex02/3 이 된다.
	public void user3(User user) { // 유저라는 이름을 가진 모델이 준비가 된다. 
	// 세번째 핸들러는 리턴타입은 void 이고, 파라미터는 도메인이다. 
	// 핸들러의 리턴타입이 void인 경우 핸들러에 맵핑된 주소가 뷰의 이름으로 사용된다. ch01.ex02.3이 이름으로 사용된다.
		user.setName("한아름");
		user.setAge(30);
	}
	
	@RequestMapping("/4") // user4의 핸들러 주소는 ch01/ex02/4 이 된다.
	public void user4(@ModelAttribute("man") User user) { // 모델 이름을 내가 정하고 싶으면 @ModelAttribute를 써준다. 그래서 man이라는 이름을 가진 모델을 리턴해준다.
		user.setName("양승일");
		user.setAge(51);
	}
	
	@RequestMapping("/5") // user5의 핸들러 주소는 ch01/ex02/5 이 된다.
	public User user5() { // 리턴타입은 도메인 파라미터값은 없다.
		User user = new User();
		user.setName("김가람");
		user.setAge(45);
		return user;
	}
	
	@RequestMapping("/6") // user6의 핸들러 주소는 ch01/ex02/6 이 된다.
	@ModelAttribute("human")
	public User user6() {
		User user = new User();
		user.setName("박현빈");
		user.setAge(27);
		return user;
	}
}