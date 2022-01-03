package spring.web.ch05.home;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller("homeController")
@RequestMapping("/ch05/home/id")	
public class IdController {
	@RequestMapping
	public String main() {
		return "ch05/home/idIn";
	}
	
	@RequestMapping("/validate")
	@ResponseBody
	public Result vaildateId(String loginId) {
		boolean isDuplicated = false;
		if((int)(Math.random() * 2) == 1) isDuplicated = true;
		
		Result result = new Result();
		result.setDuplicated(isDuplicated);
		result.setAvailableId(loginId + (int)(Math.random()*1000));
		return result;
	}
}
