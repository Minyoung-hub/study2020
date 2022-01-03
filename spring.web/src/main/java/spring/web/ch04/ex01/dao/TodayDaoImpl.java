package spring.web.ch04.ex01.dao;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import spring.web.ch04.ex01.dao.map.TodayMap;

@Repository
public class TodayDaoImpl implements TodayDao{
	@Autowired private TodayMap todayMap;
	
	@Override
	public Date getCurrentDate() {
		return todayMap.getCurrentDate();
	}
}
