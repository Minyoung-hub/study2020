package spring.test.ch01.ex02;

import java.util.Collections;
import java.util.List;

public class Nums {
	private List<Integer> nums;
	
	public Nums(List<Integer> nums) {
		this.nums = nums;
	}
	
	public int getGreatest() {
		int max = 0;
		
		if(nums.size() != 0) max = Collections.max(nums);
		else throw new RuntimeException("원소 값이 없습니다.");
		
		return max;
	}
}