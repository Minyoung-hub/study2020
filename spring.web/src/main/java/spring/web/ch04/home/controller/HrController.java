package spring.web.ch04.home.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;

import spring.web.ch04.home.domain.Employee;
import spring.web.ch04.home.service.HrService;

@Controller("hr")
@RequestMapping("/ch04/home")
public class HrController {
	@Autowired private HrService hrService;
	
	@RequestMapping("/hr")
	public @ModelAttribute("employees") List<Employee> listEmployees(){
		return hrService.listEmployees();
	}
}
