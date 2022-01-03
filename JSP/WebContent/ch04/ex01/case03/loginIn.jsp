<%@ page language='java' contentType='text/html; charset=UTF-8'
    pageEncoding='UTF-8'%>
<%
	String userId = "";
	Cookie[] cookies = request.getCookies();
	if(cookies != null){
		for(Cookie cookie:cookies){
			if(cookie.getName().equals("userId"))
				userId = cookie.getValue();
		}
	}
%>

<form action='loginProc.jsp' method='post'>
	ID: <input type='text' name='userId' value='<%=userId%>'><br>
	PW: <input type='password' name='userPw'><br>
	<input type='checkbox' name='isStoreId' value='true'>ID 저장<br>
	<input type='submit'/>
</form>