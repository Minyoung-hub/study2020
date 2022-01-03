<%@ page language='java' contentType='text/html; charset=UTF-8'
    pageEncoding='UTF-8'%>
<%
	Cookie[] cookies = request.getCookies();
	for(Cookie cookie:cookies){
		if(cookie.getName().equals("name")){
%>
		<%=cookie.getName() %>: <%=cookie.getValue() %><br>
<% 
	}
}
%>
<a href='../case01/main.html'>메인</a>