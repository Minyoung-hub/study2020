<%@ page language='java' contentType='text/html; charset=UTF-8'
    pageEncoding='UTF-8'%>
<%--한글처리 하는법 --%>
<%@ page import='java.net.URLEncoder' %>
<%@ taglib prefix='c' uri='http://java.sun.com/jsp/jstl/core' %>
<%
	Cookie cookie = new Cookie("name", URLEncoder.encode("최한석", "utf-8"));
	response.addCookie(cookie);
%>
<c:redirect url='cookieOut.jsp'/>