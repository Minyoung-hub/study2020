package spring.core.ch01.ex02;

public class Shooter {
	private String name;
	private Gun gun;
	
	public Shooter() {}
	
	public Shooter(String name, Gun gun) {
		this.name = name;
		this.gun = gun;
	}
	
	public void setGun(Gun gun) {
		this.gun = gun;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public void fire() {
		System.out.print(name + ":");
		gun.fire();
	}
}
