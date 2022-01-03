package ch05;

public class Search {
	private String userName;
	private Post post;
	
	public Search(String userName, Post post) {
		this.userName = userName;
		this.post = post;
	}

	public String getUserName() {
		return userName;
	}

	public Post getPost() {
		return post;
	}
}