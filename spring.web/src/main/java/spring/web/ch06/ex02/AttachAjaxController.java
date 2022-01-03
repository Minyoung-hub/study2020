package spring.web.ch06.ex02;

import java.io.File;
import java.io.IOException;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

@Controller
@RequestMapping("/ch06/ex02/attach")
public class AttachAjaxController {
	@Value("${attachDir}") private String attachDir;
	
	@RequestMapping
	public String main() {
		return "ch06/ex02/attachIn";
	}
	
	@ResponseBody
	@RequestMapping(method=RequestMethod.POST)
	public boolean attach(MultipartFile attachFile, HttpServletRequest request) {
		boolean stored = true;
		String dir = request.getServletContext().getRealPath(attachDir);
		String fileName = attachFile.getOriginalFilename();
		
		try {
			save(dir + "/" + fileName, attachFile);
		}catch(IOException e) {
			stored = false;
		}
		
		return stored;
	}
	
	public void save(String saveFile, MultipartFile attachFile) throws IOException {
		attachFile.transferTo(new File(saveFile));
	}
}