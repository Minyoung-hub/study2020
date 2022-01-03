package spring.test.ch03.ex01.domain;

public enum Level {
	GOLD(3, null), SILVER(2, GOLD), BASIC(1, SILVER);
	
	private final int value;
	private final Level next;
	
	private Level(int value, Level next) {
		this.next = next;
		this.value = value;
	}
	
	public int intValue() {
		return this.value;
	}
	
	public Level nextLevel() {
		return this.next;
	}
}
