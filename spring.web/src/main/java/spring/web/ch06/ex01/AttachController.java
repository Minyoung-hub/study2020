package spring.web.ch06.ex01;

import java.io.File;
import java.io.IOException;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.multipart.MultipartFile;

@Controller
@RequestMapping("/ch06/ex01/attach")
public class AttachController {
	@Value("${attachDir}") private String attachDir;
	
	@RequestMapping
	public String main() {
		return "ch06/ex01/attachIn";
	}
	
	@RequestMapping(method=RequestMethod.POST)
	public String attach(String title, MultipartFile attachFile, 
			Model model, HttpServletRequest request) {
		String dir = request.getServletContext().getRealPath(attachDir);
		System.out.println("dir: "+ dir);
		
		String fileName = attachFile.getOriginalFilename();
		save(dir + "/" + fileName, attachFile);
		
		model.addAttribute("title", title);
		model.addAttribute("fileName", fileName);
		
		return "ch06/ex01/attachOut";
	}
	
	private void save(String destFile, MultipartFile attachFile) {
		try {
			attachFile.transferTo(new File(destFile));
		}catch(IOException e) {
			e.printStackTrace();
		}
	}
}
