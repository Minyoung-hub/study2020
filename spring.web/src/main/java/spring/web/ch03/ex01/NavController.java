package spring.web.ch03.ex01;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/ch03/ex01")
public class NavController {

   @RequestMapping("/forward")
   public String first() {
      //forward 접두사 붙일시 뷰가 아니고 주소로 인식
      //자기가 자기한테 리퀘스트 보냄
      return "forward:forward/target";
   }
   
   @RequestMapping("/forward/target")
   public String target1() {
      return "ch03/ex01/forward";
   }
   
   @RequestMapping("/redirect")
   public String second() {
      //redirect 접두사 붙일시 뷰가 아니고 주소로 인식
      return "redirect:redirect/target";
   }
   
   @RequestMapping("/redirect/target")
   public String target2() {
      return "ch03/ex01/redirect";
   }
}
