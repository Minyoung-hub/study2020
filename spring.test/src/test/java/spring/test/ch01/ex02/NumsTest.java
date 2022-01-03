package spring.test.ch01.ex02;

import static org.junit.Assert.assertEquals;

import java.util.Arrays;

import org.junit.Test;

public class NumsTest {
	@Test
	public void testGetGreatest() {
		Nums nums = new Nums(Arrays.asList(-1, -2, -3));
		assertEquals(-1, nums.getGreatest());
	}
}