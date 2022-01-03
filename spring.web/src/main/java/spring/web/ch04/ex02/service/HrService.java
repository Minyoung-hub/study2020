package spring.web.ch04.ex02.service;

import java.util.List;

import spring.web.ch04.ex02.domain.Employee;

public interface HrService {
   List<Employee> viewEmpList();
}