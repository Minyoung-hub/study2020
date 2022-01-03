package spring.test.ch02;

import static org.junit.Assert.assertTrue;
import static org.junit.Assert.assertFalse;
import org.junit.Test;

public class Myassert4 {
	@Test
	public void test() {
		assertTrue(true);
	}
	
	@Test
	public void test2() {
		assertTrue(false);
	}
	
	@Test
	public void test3() {
		assertFalse(true);
	}
	
	@Test
	public void test4() {
		assertFalse(false);
	}
}