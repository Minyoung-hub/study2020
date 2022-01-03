<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%! //declaration
	public int add(int num1, int num2){
		return num1 + num2;
	}

	int num1 = 1;
%>
<%
	int num2 = 2;
%>
<h2>더하기</h2>
<%= num1 %> + <%= num2 %> =<%= add(num1, num2) %> 