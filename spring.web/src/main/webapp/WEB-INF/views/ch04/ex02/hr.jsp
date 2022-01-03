<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<html>
<body>
<table border="1">
	<thead>
		<tr>
			<th>last name</th>
			<th>salary</th>
			<th>hire date</th>
		</tr>
	</thead>
	<tbody>
		<c:forEach var="a" items="${message}">
		<tr>
			<td>${a.lastName}</td>
			<td>${a.salary}</td>
			<td>${a.hireDate}</td>
		</tr>
		</c:forEach>
	</tbody>
</table>
</body>
</html>