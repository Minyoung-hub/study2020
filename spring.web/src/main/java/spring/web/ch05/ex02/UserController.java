package spring.web.ch05.ex02;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller("ch05.ex02.userController")
@RequestMapping("/ch05/ex02/user")
public class UserController {
	@RequestMapping()
	public String main() {
		return "ch05/ex02/userIn";
	}
	
	@ResponseBody
	@RequestMapping("/register") //(method=)
	public User register(User user) {
		return user;
	}
}
