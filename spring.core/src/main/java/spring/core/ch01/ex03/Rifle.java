package spring.core.ch01.ex03;

public class Rifle implements Gun{
	@Override
	public void fire() {
		System.out.println("소총 탕탕");
	}
}
