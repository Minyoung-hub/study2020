<%@ page language='java' contentType='text/html; charset=UTF-8'
    pageEncoding='UTF-8'%>
<%@ taglib prefix="c" uri='http://java.sun.com/jsp/jstl/core' %>

<c:url value='numIn.jsp' var='numIn'>
	<c:param name='msg' value='숫자를 입력하세요.'/>
</c:url>

<%
	String numStr = request.getParameter("num");
	int num = 0;
	try{
		num = Integer.parseInt(numStr);
%>
		<%=num%> <br>
		<a href="numIn.jsp">돌아가기</a>
<%
	}catch(NumberFormatException e){
%>
		<c:redirect url='${numIn}'/>
<%
	}
%>