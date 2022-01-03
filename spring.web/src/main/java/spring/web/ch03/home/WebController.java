package spring.web.ch03.home;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/ch03/home")
public class WebController {
	@RequestMapping("/portal")
	public void web() {}

	@RequestMapping("/naver")
	public String naver() {
		return "redirect:http://www.naver.com";
	}

	@RequestMapping("/daum")
	public String daum() {
		return "redirect:http://www.daum.net";
	}

}
