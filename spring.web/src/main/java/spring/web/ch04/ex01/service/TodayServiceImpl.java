package spring.web.ch04.ex01.service;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import spring.web.ch04.ex01.dao.TodayDao;

@Service
public class TodayServiceImpl implements TodayService{
	@Autowired private TodayDao todayDao;
	
	@Override
	public Date now() {
		return todayDao.getCurrentDate();
	}
}