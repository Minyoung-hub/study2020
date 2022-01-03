package spring.web.ch10.ex03.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import spring.web.ch10.ex03.domain.Message;
import spring.web.ch10.ex03.service.HtmlMailService;

@Controller
@RequestMapping("/ch10/ex03/mail")
public class HtmlMailController {
	@Autowired private HtmlMailService mailService;
	
	@RequestMapping
	public void main() {}
	
	@RequestMapping(method=RequestMethod.POST)
	public String send(Message msg) {
		mailService.send(msg);
		return "ch10/ex03/result";
	}
}
