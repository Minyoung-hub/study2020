<%@ page language='java' contentType='text/html; charset=UTF-8'
    pageEncoding='UTF-8'%>
<%
	String userId = request.getParameter("userId");
	String isStoreId = request.getParameter("isStoreId");
	
	if(isStoreId != null && isStoreId.equals("true")){
		Cookie cookie = new Cookie("userId", userId);
		cookie.setMaxAge(60 * 60 * 24 * 7);
		response.addCookie(cookie);
	}
%>
<jsp:forward page='loginOut.jsp'/>