package ch01.ex03.home;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/ch01/ex03/home/add")
public class DoGetPost extends HttpServlet{
	
	public void share(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException{
			
			int num1 = 1;
			int num2 = 2;
		
			response.setContentType("text/html;charset=utf-8");
			PrintWriter out = response.getWriter();
			if(request.getMethod().equals("GET")) {
				out.println("<h2>GET</h2>");
			}
			else {
				out.println("<h2>POST</h2>");
			}
			out.printf("<p>%d + %d = %d</p>", num1, num2, num1 + num2);
		}
	
	@Override
	public void doGet(HttpServletRequest request, HttpServletResponse response)
		throws ServletException, IOException{
		share(request, response);
	}
	
	@Override
	public void doPost(HttpServletRequest request, HttpServletResponse response)
	throws ServletException, IOException{
		share(request, response);
	}
}