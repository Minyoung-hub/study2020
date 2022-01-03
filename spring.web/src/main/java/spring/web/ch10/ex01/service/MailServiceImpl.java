package spring.web.ch10.ex01.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class MailServiceImpl implements MailService{
	@Autowired private JavaMailSender mailSender;
	
	@Override
	public void send() {
		SimpleMailMessage message = new SimpleMailMessage(); 
		// html 태그가 포함되지 않아도 될때(단순 텍스트)는 simpleMessage를 사용
		// html을 넣고 싶다(디자인을 추가하고 싶다)는 mimeMessage를 사용
		message.setTo("alsdud116@gmail.com");
		message.setSubject("안부");
		message.setText("안녕, 잘 지내고 있니?");
		mailSender.send(message);
	}
}