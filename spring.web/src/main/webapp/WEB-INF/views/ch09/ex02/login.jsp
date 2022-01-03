<%@ page language='java' contentType='text/html; charset=UTF-8' pageEncoding='UTF-8'%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

<%
	if(session.getAttribute("userId")==null){
%>
	<form method="post">
		<label>ID: <input type='text' name="userId"/></label><br>
		<label>PW: <input type='password' name="userPw"/></label><br>
		<button type="submit">제출</button>
	</form>
<%
	}else {
%>
		${userId}로 로그인했습니다.<br>
		<a href="article">가사보기</a>
<%
	}
%>