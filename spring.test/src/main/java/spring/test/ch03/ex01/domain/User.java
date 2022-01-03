package spring.test.ch03.ex01.domain;

public class User {
	private String userName;
	private Level level;
	private int loginCnt;
	
	public User() {}
	
	public User(String userName, Level level) {
		this.level = level;
		this.userName = userName;
	}
	
	public User(String userName, Level level, int loginCnt) {
		this.level = level;
		this.userName = userName;
		this.loginCnt = loginCnt;
	}
	
	public void upgradeLevel() {
		Level nextLevel = level.nextLevel();
		if(nextLevel == null)
			throw new IllegalStateException("이미 최고 등급 " + this.level +  " 입니다.");
		else
			this.level = nextLevel;
	}

	public Level getLevel() {
		return level;
	}

	public void setLevel(Level level) {
		this.level = level;
	}
	
	public int getLoginCnt() {
		return this.loginCnt;
	}
	
	@Override
   public String toString() {
      return String.format("%s %s", userName, level);
   }
}