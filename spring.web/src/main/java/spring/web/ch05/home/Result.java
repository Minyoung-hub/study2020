package spring.web.ch05.home;

public class Result {
	private boolean duplicated;
	private String availableId;
	
	public boolean isDuplicated() {
		return duplicated;
	}
	
	public void setDuplicated(boolean duplicated) {
		this.duplicated = duplicated;
	}
	
	public String getAvailableId() {
		return availableId;
	}
	
	public void setAvailableId(String availableId) {
		this.availableId = availableId;
	}
}