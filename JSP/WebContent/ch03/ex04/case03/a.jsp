<%@ page language='java' contentType='text/html; charset=UTF-8'
    pageEncoding='UTF-8'%>
<meta charset="UTF-8">
A
<%
   request.setAttribute("userName", "최한석");
%>
<jsp:forward page='b.jsp'/>