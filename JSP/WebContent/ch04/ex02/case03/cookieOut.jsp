<%@ page language='java' contentType='text/html; charset=UTF-8'
    pageEncoding='UTF-8'%>
<%@ page import='java.net.URLDecoder' %>
<%
	Cookie[] cookies = request.getCookies();
	for(Cookie cookie:cookies){
		if(cookie.getName().equals("name")){
%>
		<%= URLDecoder.decode(cookie.getValue()) %><br>
<%
	}
}
%>