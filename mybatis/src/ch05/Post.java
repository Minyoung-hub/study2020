package ch05;

public class Post {
	private String title;
	private String content;
	
	public Post() {}
	public Post(String title, String content){
		this.title = title;
		this.content = content;
	}
	
	public String getContent() {
		return content;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getTitle() {
		return title;
	}
	
	public void setContent(String content) {
		this.content = content;
	}
	
	@Override
	public String toString() {
		return String.format("%s: %s", title, content);
	}
}