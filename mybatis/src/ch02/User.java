package ch02;

import java.sql.Date;

public class User {
	private int userId;
	private String userName;
	private Date regDate;
	
	public User() {} // Domain에는 안쓰더라도 기본생성자가 있도록하자.
	
	public User(int userId, String userName, Date regDate) {
		this.userId = userId;
		this.userName = userName;
		this.regDate = regDate;
	}
	
	public int getUserId() {
		return userId;
	}
	
	public void setUserId(int userId) {
		this.userId = userId;
	}
	
	public String getUserName() {
		return userName;
	}
	
	public void setUserName(String userName) {
		this.userName = userName;
	}
	
	public Date getRegDate() {
		return regDate;
	}
	
	public void setRegDate(Date regDate) {
		this.regDate = regDate;
	}
	
	@Override
	public String toString() {
		return String.format("%d %s %s", userId, userName, regDate);
	}
}