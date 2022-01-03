package spring.core.ch02.ex01;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;

@Aspect //   aspectj-autoproxy가 읽음      //   Bean을 Aspect으로 만들어 주는 행위.
@Component //   component-scan가 읽음
public class ConsoleAspect {
	
	@Pointcut("execution(public int spring.core.ch02.ex01..user..*Dao.*(..))") /*..은 0개 이상의 무언가를 나타낸다.*/
	// Pointcut의 이름은 method이름이다.
	// 경로.. 하면 기술된 경로까지만 일치하고 그 밑으로 '0'개 이상 의 주소를 가져온다.
	// 경로 마지막에 *Dao는 Dao로 끝나는 Class파일을 찾는다.

	public void pointcut1() {}
	
	/*Before Annotation은 joinpoint실행 '전'에 실행된다.*/
	@Before("pointcut1()") /*joinpont를 기술*/  // advice로 만드는 행위.  // advice는 joinpoint와 만나서 작동한다.
	public void advice1(JoinPoint jp  /*Container가 자동으로 JoinPoint객체를 넣어준다.*/) { // 조인포인트 전에 실행된다.
		System.out.println("@Before: " + jp.toShortString()/*jp의이름을 출력한다.*/);
	}
	
	/*AfterReturning Annotation은 joinpoint가 성공,실행 '후'에 실행된다.*/
	@AfterReturning(pointcut="execution(* spring.core.ch02.ex01..service..*(..))", returning="cnt") // pointcut의 이름이 advice의 parameter와 같으면 JoinPoint에 넘겨준다.
	public void advice2(JoinPoint jp, int cnt/*jp의 return값을 담을 변수선언*/) {
		System.out.println("@AfterReturning: " + cnt + ": " + jp.toShortString());
	}
	/*
	 * JoinPoint의 조건 : pointCut
	 * JoinPoint의 return Type에 따라 결합 가능한 advice가 정해진다.
	 */

	/*@AfterThrowing Annotation은 joinpoint가 실패,실행 '후'에 실행된다. AfterReturning과는 배타적, 둘 다 있을경우 성공여부로 둘중 하나만 실행.*/
	@AfterThrowing(pointcut="execution(* spring.core.ch02.ex01..service..*(..))", throwing="e")
	public void advice3(JoinPoint jp, Throwable e) {
		System.out.println("@AfterThrowing: " + jp.toShortString());
	}
	
	/*@After Annotation은 joinpoint가 성공여부를 따지지 않고 joinpoint실행 후 실행된다.*/
	@After("execution(* spring.core.ch02.ex01..service..*(..))")
	public void advice4(JoinPoint jp) {
		System.out.println("@After: " + jp.toShortString());
	}
	
	/*@Around는 언제 joinpoint를 끊을것인지 정해줄 수 있다. 조인포인트 전후로 실행*/
	@Around("execution(* spring.core.ch02.ex01.user.service.UserService.setUserName(..))")
	public Object advice5(ProceedingJoinPoint jp) throws Throwable {
		System.out.println("@Around: 시작 " + jp.toShortString());
		Object obj = jp.proceed();
		System.out.println("@Around: 끝 " + jp.toShortString());
		return obj;
	}
}