package spring.web.ch04.ex02.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import spring.web.ch04.ex02.domain.Employee;
import spring.web.ch04.ex02.service.HrService;

@Controller
@RequestMapping("/ch04/ex02")
public class HrController {
   @Autowired private HrService hrService;
   
   @RequestMapping("/hr")
   @ModelAttribute("emp")
   public ModelAndView hrList() {
	   List<Employee> empList = hrService.viewEmpList();
      return new ModelAndView("ch04/ex02/hr", "message", empList);
   }
}