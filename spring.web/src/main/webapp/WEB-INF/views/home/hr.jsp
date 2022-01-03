<%@ page language='java' contentType='text/html; charset=UTF-8'
    pageEncoding='UTF-8'%>
<%@ taglib prefix='c' uri='http://java.sun.com/jsp/jstl/core' %>
<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<div class='container'>
	<table class='table'>
		<caption>직원들</caption>
		<thead>
			<tr>
				<th>이름</th>
				<th>월급</th>
				<th>입사일</th>
			</tr>
		</thead>
		<tbody>
			<c:forEach var='user' items='${users}'>
				<tr>
					<td>${user.userNo}</td>
					<td>${user.userName}</td>
					<td>${user.regDate}</td>
				</tr>
			</c:forEach>
		</tbody>
	</table>
</div>