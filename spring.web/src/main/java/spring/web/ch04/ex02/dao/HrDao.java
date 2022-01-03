package spring.web.ch04.ex02.dao;

import java.util.List;

import spring.web.ch04.ex02.domain.Employee;

public interface HrDao {
	List<Employee> getEmpList();
}