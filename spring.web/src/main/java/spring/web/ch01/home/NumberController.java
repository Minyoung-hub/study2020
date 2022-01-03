package spring.web.ch01.home;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/ch01/home")
public class NumberController {
	@RequestMapping(value="/number", method=RequestMethod.GET)
	public String in() {
		return "ch01/home/numberIn";
	}
	
	@RequestMapping(value="/number", method=RequestMethod.POST)
	public String out(Number number) {
		return "ch01/home/numberOut";
	}
}