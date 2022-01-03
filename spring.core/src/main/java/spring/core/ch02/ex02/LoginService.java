package spring.core.ch02.ex02;

import org.springframework.stereotype.Service;

@Service
public class LoginService {
   public boolean validateLoginInfo(String userId, String userPw) {
      return true;
   }
}