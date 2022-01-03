<%@ page language='java' contentType='text/html; charset=UTF-8'
    pageEncoding='UTF-8'%>
<%
	String userName = request.getParameter("userName");
	String num1Str = request.getParameter("num1");
	String num2Str = request.getParameter("num2");
	String regDate = request.getParameter("regDate");
	
	int num1 = Integer.parseInt(num1Str);
	int num2 = Integer.parseInt(num2Str);
%>
<%= userName %>이 요청한 계산 결과는<br>
<%= num1 %> + <%= num2 %> = <%= num1+num2 %> <br>
등록일: <%= regDate %>