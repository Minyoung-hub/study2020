<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html> <!-- out.write("<!DOCTYPE html>\r\n"); -->
<% //scriptlet
	int num1 = 1;
	int num2 = 2;
%>
<h2>더하기</h2>
<%-- expression --%>
<%= num1 %> + <%= num2 %> = <%= num1 + num2 %> <!--  out.print( num1 ); -->
<br>
<%
	num1++;
	num2++;
%>
<%= num1 %> + <%= num2 %> = <%= num1 + num2 %>