package spring.web.ch05.home2;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller("ch05.home2.idController")
@RequestMapping("/ch05/home2/id")
public class IdController {
	@RequestMapping
	public String main() {
		return "ch05/home2/idIn";
	}
	
	@ResponseBody
	@RequestMapping(method=RequestMethod.POST)
	public IdReview validateId(String userId) {
		boolean overlap = false;
		if((int)(Math.random() * 2) == 1) overlap = true;
		
		IdReview review = new IdReview();
		if(overlap == true)
			review.setProposeId(userId + (int)(Math.random() * 100));
		
		return review;
	}

}
