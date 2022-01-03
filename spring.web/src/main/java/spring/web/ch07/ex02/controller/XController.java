package spring.web.ch07.ex02.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import spring.web.ch07.ex02.service.XService;

@Controller("ch07/ex02/xcontroller")
public class XController {
	@Autowired private XService xService;
	
	@RequestMapping
	public void main() {}
	
	@ResponseBody
	@RequestMapping("/good")
	public int good() {
		return xService.good();
	}
	
	@ResponseBody
	@RequestMapping("/bad")
	public int bad() {
		return xService.bad();
	}
	
	@ResponseBody
	@RequestMapping("/badWithX")
	public int badWithX() {
		return xService.badWithX();
	}
}
