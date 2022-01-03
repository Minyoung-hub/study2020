package spring.web.ch09.ex02;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/ch09/ex02")
public class LoginController {
	@RequestMapping(value="/login", method=RequestMethod.GET)
	public void login() {}
	
	@RequestMapping(value="/login", method=RequestMethod.POST)
	public void login(HttpSession session, String userId) {
		if(userId != null) session.setAttribute("userId", userId);	
	}
	
	@RequestMapping("/logout")
	public String logout(HttpSession session) {
		session.invalidate();
		return "redirect:login";
	}
}