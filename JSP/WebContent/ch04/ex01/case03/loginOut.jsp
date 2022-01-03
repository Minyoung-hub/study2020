<%@ page language='java' contentType='text/html; charset=UTF-8'
    pageEncoding='UTF-8'%>
<%
	String userId = request.getParameter("userId");
%>
<%= userId %>, 환영합니다.
<a href='logoutProc.jsp'>로그인</a>