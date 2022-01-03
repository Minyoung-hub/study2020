package spring.web.ch01.home2;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller("numController")
@RequestMapping("/ch01/home2/num")
public class NumberController {
	@RequestMapping(method=RequestMethod.GET)
	public String numIn() {
		return "ch01/home2/numIn";
	}
	
	@RequestMapping(method=RequestMethod.POST)
	public String numOut(Number num) {
		return "ch01/home2/numOut";
	}
}
