<%@ page language='java' contentType='text/html; charset=UTF-8'
    pageEncoding='UTF-8'%>
<%
	request.setAttribute("num", request.getParameter("num"));
%>
<jsp:forward page='numOut.jsp'/>
