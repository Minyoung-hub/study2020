package spring.test.ch01.ex01;

import static org.junit.Assert.assertEquals;

import java.util.Arrays;

import org.junit.Test;

public class NumsTest2 {
	@Test
	public void testGetGreatest() {
		Nums nums = new Nums(Arrays.asList(-1, -2, -3));
		assertEquals(-1, nums.getGreatest());
	}
}