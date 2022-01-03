<%@ page language='java' contentType='text/html; charset=UTF-8'
    pageEncoding='UTF-8'%>
<meta charset="utf-8">
<form action = 'numProc.jsp'>
	<input type='number' name='num'/>
	<button type='submit'>제출</button>
</form>
<%
	String msg = (String)request.getAttribute("msg");
	if(msg != null && !msg.equals("")) out.print(msg);
%>