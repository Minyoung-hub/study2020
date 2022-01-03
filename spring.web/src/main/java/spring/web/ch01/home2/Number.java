package spring.web.ch01.home2;

public class Number {
	private double num;
	
	public double getNum() {
		return num + (int)(Math.random() * 10) / 10.0;
	}
	
	public void setNum(double num) {
		this.num = num;
	}
}