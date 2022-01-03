package spring.web.ch07.ex02.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service("ch07.ex02.xService")
public class XServiceImpl implements XService{
	@Override
	@Transactional
	public int good() {
		return 1;
	}
	
	@Override
	public int bad() {
		return 3 / 0;
	}
	
	@Override
	@Transactional
	public int badWithX() {
		return 3 / 0;
	}
}
