package spring.web.ch04.home.dao.map;

import java.util.List;
import org.springframework.stereotype.Repository;
import spring.web.ch04.home.domain.Employee;

@Repository("hrmap")
public interface HrMap {
	public List<Employee> getEmployees();
}