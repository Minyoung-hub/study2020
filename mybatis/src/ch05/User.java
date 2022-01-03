package ch05;

import java.sql.Date;
import java.util.List;

public class User {
	private int userId;
	private String userName;
	private Date regDate;
	private List<Post> posts;
	
	public User() {}
	
	public User(int userId, String userName, Date regDate) {
		this.userId = userId;
		this.userName = userName;
		this.regDate = regDate;
	}
	
	@Override
	public String toString() {
		return String.format("%d %s %s %s", 
				userId, userName, regDate, posts);
	}
}
