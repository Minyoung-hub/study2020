package css;

import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		System.out.println("input number");
		int num1 = sc.nextInt();
		System.out.println("input number");
		int num2 = sc.nextInt();
		
		int result = num1 + num2;
		System.out.println("result : "+result);
		sc.close();
	}

}