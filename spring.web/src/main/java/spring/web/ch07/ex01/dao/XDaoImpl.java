package spring.web.ch07.ex01.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import spring.web.ch07.ex01.dao.map.XMap;

@Repository
public class XDaoImpl implements XDao{
	@Autowired XMap xMap;
	
	@Override
	public int addNext() {
		return xMap.addNext();
	}
	
	@Override
	public int addCurr() {
		return xMap.addCurr();
	}
	
	@Override
	public List<Integer> getRows(){
		return xMap.getRows();
	}
}