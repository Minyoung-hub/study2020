package spring.web.ch01.ex01;

import java.time.LocalDate;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

// ioc에서 빈만듬 mvc에서 핸들러 매핑에 등록
@Controller
public class TodayController {
   //범위의 리퀘스트를 이 컨트롤러로 연결한다.
   @RequestMapping("/") // '/'주소값은 필수 주소
   public String home(Model model) {
      LocalDate date = LocalDate.now();
      model.addAttribute("today", date);
      //뷰의 이름
      return "ch01/ex01/today";
   }
}