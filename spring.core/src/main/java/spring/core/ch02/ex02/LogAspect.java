package spring.core.ch02.ex02;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;

@Aspect //   aspectj-autoproxy가 읽음      //   Bean을 Aspect으로 만들어 주는 행위.
@Component //   component-scan가 읽음
public class LogAspect {
	public Logger logger;
	
	public LogAspect() {
		logger = LogManager.getLogger(LogAspect.class);
	}
	
	@Around("execution(* spring.core.ch02.ex02..*(..))") // around옆에 pointcut을 쓴다.
	public Object advice (ProceedingJoinPoint jp) throws Throwable {
		logger.info(jp.toShortString() + " 시작.");
		Object obj = jp.proceed(); // joinPoint를 실행시킨다.
		logger.info(jp.toShortString() + " 끝.");
		return obj;
	}
}