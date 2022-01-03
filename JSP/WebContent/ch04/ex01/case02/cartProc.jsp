<%@ page language='java' contentType='text/html; charset=UTF-8'
    pageEncoding='UTF-8'%>
<a href='main.html'>상품</a>
<%@ taglib prefix='c' uri='http://java.sun.com/jsp/jstl/core' %>
<%
	request.setCharacterEncoding("utf-8");
	String[] prods = request.getParameterValues("prod");
	
	String products = "";
	for(String prod:prods) products += prod + "/";
	
	Cookie cookie = new Cookie("cart", products);
	cookie.setMaxAge(60*60*24*365);
	response.addCookie(cookie);
%>
<c:redirect url='cartOut.jsp'/>