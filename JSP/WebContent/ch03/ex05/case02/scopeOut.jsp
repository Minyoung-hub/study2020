<%@ page language='java' contentType='text/html; charset=UTF-8'
    pageEncoding='UTF-8'%>
<ul>
	<li><%=pageContext.getAttribute("page")%>
	<li><%=request.getAttribute("request")%>
	<li><%=session.getAttribute("session")%>
	<li><%=application.getAttribute("application")%>
</li>
