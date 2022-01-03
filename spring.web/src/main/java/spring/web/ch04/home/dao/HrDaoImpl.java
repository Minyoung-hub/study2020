package spring.web.ch04.home.dao;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import spring.web.ch04.home.dao.map.HrMap;
import spring.web.ch04.home.domain.Employee;

@Repository("hrDao")
public class HrDaoImpl implements HrDao{
	@Autowired private HrMap hrMap;
	
	@Override
	public List<Employee> getEmployees(){
		return hrMap.getEmployees();
	}
}