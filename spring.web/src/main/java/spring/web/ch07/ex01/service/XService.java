package spring.web.ch07.ex01.service;

import java.util.List;

public interface XService {
	int good();
	int badWithX(); //트랜젝션 관리한다. Dao에서 트랙젝션 발생 
	int badNoX(); //트랜젝션 관리안한다. Dao에서 트랙젝션 발생
	int badService(); // Service에서 트랙젝션 발생
	List<Integer> listNums();
}
