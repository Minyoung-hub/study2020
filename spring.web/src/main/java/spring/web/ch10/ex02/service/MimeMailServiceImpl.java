package spring.web.ch10.ex02.service;

import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMessage.RecipientType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class MimeMailServiceImpl implements MimeMailService{
   @Autowired private JavaMailSender mailSender;
   
   @Override
   public void send() {
      MimeMessage message = mailSender.createMimeMessage();
      
      String txt = "<div class='container' style='border:1px solid #A593E0;'>\r\n" + 
      		"	<div style='background:#A593E0; height:30px;'></div>\r\n" + 
      		"	<h1 style='color: gray; margin-left: 30px;'><b style='color:#A593E0;'> PANPLE의 인증번호</b>를<br> 안내해 드립니다.</h1>\r\n" + 
      		"	<br>\r\n" + 
      		"	<h4 style='margin-left: 30px;'>안녕하세요 회원님, <b style='color:#A593E0;'>PANPLE</b>입니다.<div style='height: 10px;'></div>\r\n" + 
      		"	요청하신 인증번호를 안내해 드립니다. <div style='height: 10px;'></div>\r\n" + 
      		"	아래 번호를 인증번호 입력란에 입력하시면 인증이 완료됩니다.<br>\r\n" + 
      		"	</h4>\r\n" + 
      		"	<br>\r\n" + 
      		"	<div style='margin-left: 30px; margin-right: 30px; border: 1px solid #A593E0; width: 600px'>\r\n" + 
      		"		<div style='display: inline-block; height: 50px; width: 150px; font-size: 25px; background:#A593E0; color: white;'>&nbsp;인증번호</div>\r\n" + 
      		"		<div style='display: inline-block; height: 50px; width: 350px; font-size: 25px; color: gray;'>&nbsp;123456</div>\r\n" + 
      		"	</div>\r\n" + 
      		"	<br>\r\n" + 
      		"	<p style='color: gray; margin-left: 30px;'>\r\n" + 
      		"	- 인증코드가 타인에게 노출되지 않도록 해주세요.<br>\r\n" + 
      		"	- 잘못 수신된 이메일인 경우 PANPLE 고객센터에 문의해주세요.<br>\r\n" + 
      		"	</p>\r\n" + 
      		"	<br><hr style='margin-left: 30px; margin-right: 30px;'>\r\n" + 
      		"	<p style='color: gray; margin-left: 30px;'> \r\n" + 
      		"	본 메일은 발신 전용으로 회신되지 않습니다. 추가 문의는 PANPLE 고객센터 : 02-0000-0000 를 이용해주시기 바랍니다.\r\n" + 
      		"</div>";
      try {
         message.addRecipient(RecipientType.TO, new InternetAddress("alsdud116@gmail.com"));
         message.setSubject("FANPLE - 이메일 인증 번호");
		 message.setText(txt, "utf-8", "html");
      }catch(Exception e) {}
      
      mailSender.send(message);
   }
}