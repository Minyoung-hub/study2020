<%@ page language='java' contentType='text/html; charset=UTF-8'
    pageEncoding='UTF-8'%>
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
		request.setAttribute("msg", "숫자를 입력하세요.");
%>
		<jsp:forward page='numIn.jsp'/>
<%
	}
%>