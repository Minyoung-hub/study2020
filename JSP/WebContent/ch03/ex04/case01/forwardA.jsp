<%@ page language='java' contentType='text/html; charset=UTF-8'
    pageEncoding='UTF-8'%>
A
<%
	RequestDispatcher dispatcher = request.getRequestDispatcher("forwardB.jsp");
	dispatcher.forward(request, response);
%>