package spring.test.ch02;

import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNull;

import java.util.Date;

import org.junit.Test;

public class Myassert {
	@Test
	public void test() {
		assertNull(new Date());
	}
	
	@Test
	public void test2() {
		assertNotNull(new Date());
	}
	
	@Test
	public void test3() {
		assertNull(null);
	}
	
	@Test
	public void test4() {
		assertNotNull(null);
	}
}