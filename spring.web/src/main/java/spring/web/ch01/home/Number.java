package spring.web.ch01.home;

public class Number {

	private double num;
	
	public double getNum() {
		return num;
	}

	public void setNum(int num) {
		this.num = num + Math.random();
	}
}