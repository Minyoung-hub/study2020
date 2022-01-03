package spring.test.ch02;

import static org.junit.Assert.assertEquals;
import org.junit.Test;

public class Myassert2 {
	@Test
	public void test() {
		assertEquals(3, 3);
	}
	
	@Test
	public void test2() {
		assertEquals(3, 1);
	}
	
	@Test
	public void test3() {
		assertEquals("다릅니다.", 3, 2);
	}
}