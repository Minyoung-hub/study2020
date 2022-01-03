<%@ page language='java' contentType='text/html; charset=UTF-8'
    pageEncoding='UTF-8'%>
<ul>
	<li>getContextPath(): <%= request.getContextPath() %></li>
	<li>getMethod(): <%= request.getMethod() %></li>
	<li>getRequestURL(): <%= request.getRequestURL() %></li>
	<li>getRequestURI(): <%= request.getRequestURI() %></li>
	<li>getQueryString(): <%= request.getQueryString() %></li>
	<li>getServerName(): <%= request.getServerName() %></li>
	<li>getProtocol(): <%= request.getProtocol() %></li>
</ul>