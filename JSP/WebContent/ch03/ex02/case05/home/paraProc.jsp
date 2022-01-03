<%@ page language='java' contentType='text/html; charset=UTF-8'
    pageEncoding='UTF-8'%>
<%
/*
	String gender1 = request.getParameter("gender1");
	String gender2 = request.getParameter("gender2");
	
	System.out.println(gender1); // "on"
	System.out.println(gender2); // null
	
	String season = request.getParameter("season");
	System.out.println(season);
	
	String gender = request.getParameter("gender");
	System.out.println(gender);

	String[] seasons = request.getParameterValues("season");
	System.out.println(seasons); // null, [Ljava.lang.String;@3ac980b0
*/
	request.setCharacterEncoding("utf-8");
	String userName = request.getParameter("userName");
	String gender = request.getParameter("gender");
	String[] seasons = request.getParameterValues("season");
	String job = request.getParameter("job");
%>
<h2>답변 확인</h2>
<table>
	<tr>
		<th>이름</th>
		<td><%= userName %></td>
	</tr>
	<tr>
		<th>성별</th>
		<td>
			<%
				if(gender.equals("male")) gender = "남";
				else gender = "여";
			%><%= gender %>
		</td>
	</tr>
	<tr>
		<th>계절</th>
		<td>
			<% for(String season: seasons) {%> <%=season %> <%}%>
		</td>
	</tr>
	<tr>
		<th>직업</th>
		<td><%= job %></td>
	</tr>
</table>