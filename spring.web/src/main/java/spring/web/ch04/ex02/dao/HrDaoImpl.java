package spring.web.ch04.ex02.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import spring.web.ch04.ex02.dao.map.HrMap;
import spring.web.ch04.ex02.domain.Employee;

@Repository
public class HrDaoImpl implements HrDao {
   @Autowired private HrMap hrMap;
   
   @Override
   public List<Employee> getEmpList() {
      return hrMap.getEmpList();
   }
}