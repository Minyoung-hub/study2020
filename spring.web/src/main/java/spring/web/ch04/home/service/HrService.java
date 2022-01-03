package spring.web.ch04.home.service;

import java.util.List;
import spring.web.ch04.home.domain.Employee;

public interface HrService {
	List<Employee> listEmployees();
}
