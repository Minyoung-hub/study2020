package spring.web.ch04.home.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import spring.web.ch04.home.dao.HrDao;
import spring.web.ch04.home.domain.Employee;

@Service("hrService")
public class HrServiceImpl implements HrService{
	@Autowired private HrDao hrDao;
	
	@Override
	public List<Employee> listEmployees(){
		return hrDao.getEmployees();
	}
}