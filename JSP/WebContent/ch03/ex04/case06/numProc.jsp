<%@ page language='java' contentType='text/html; charset=UTF-8'
    pageEncoding='UTF-8'%>
<%@ taglib prefix='c' uri='http://java.sun.com/jsp/jstl/core' %>
<%
	String url = "numOut.jsp?num=" + request.getParameter("num");
	pageContext.setAttribute("url", url);
%>
<c:redirect url='${url}'/>