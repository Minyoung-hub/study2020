package spring.test.ch01.ex02;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.fail;
import static org.junit.Assert.assertTrue;
import java.util.ArrayList;
import org.junit.Test;

public class NumsTest2 {
	@Test
	public void testEmpty() {
		Nums nums = new Nums(new ArrayList<Integer>());
		assertEquals(1, nums.getGreatest());
	}
	
	@Test
	public void testEmpty2() {
		Nums nums = new Nums(new ArrayList<Integer>());
		try {
			nums.getGreatest();
			fail("예외가 발생했습니다.");
		} catch(Exception e) {
			assertTrue(true);
		}
	}
}