<%@ page language='java' contentType='text/html; charset=UTF-8'
    pageEncoding='UTF-8'%>
<a href = 'main.html'>메인</a><br>
<%
	Cookie cookie = new Cookie("age", "34");
	response.addCookie(cookie);
%>