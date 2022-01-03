package spring.web.ch04.ex02.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import spring.web.ch04.ex02.dao.HrDao;
import spring.web.ch04.ex02.domain.Employee;

@Service
public class HrServiceImpl implements HrService {

 private HrDao hrDao;
   
   @Override
   public List<Employee> viewEmpList() {
      return hrDao.getEmpList();
   }

}