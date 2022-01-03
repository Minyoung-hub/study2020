package spring.web.ch04.home.dao;

import java.util.List;
import spring.web.ch04.home.domain.Employee;

public interface HrDao {
	List<Employee> getEmployees();
}
