package spring.core.ch01.ex04;

import org.springframework.stereotype.Component;

@Component /*컨테이너야 이 클래스를 바탕으로 IoC를해~~ 라는 뜻*/
public class Pistol implements Gun{
	@Override
	public void fire() {
		System.out.println("권총 탕탕");
	}

}
