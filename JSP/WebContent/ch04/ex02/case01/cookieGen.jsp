<%@ page language='java' contentType='text/html; charset=UTF-8'
    pageEncoding='UTF-8'%>
<%
	Cookie cookie = new Cookie("name", "john");
	response.addCookie(cookie);
%>
<a href='main.html'>메인</a>