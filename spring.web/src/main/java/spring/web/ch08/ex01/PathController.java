package spring.web.ch08.ex01;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/ch08/ex01")
public class PathController {
	@RequestMapping("/user/{userNo}/add") // 주소에 변수 포함
	public String user(@PathVariable String userNo, Model model) {
		model.addAttribute("userNo", userNo);
		return "ch08/ex01/user";
	}
	
	@RequestMapping("/user/add/{userNo}")
	public String user2(@PathVariable String userNo, Model model) {
		model.addAttribute(userNo);
		return "ch08/ex01/user";
	}
}
