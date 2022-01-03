<%@ page language='java' contentType='text/html; charset=UTF-8'
    pageEncoding='UTF-8'%>
<%@ page import = 'java.util.List, java.util.ArrayList' %>
<%@ page import = 'java.util.StringTokenizer' %>
<a href='main.html'>상품</a>
<%@ taglib prefix='c' uri='http://java.sun.com/jsp/jstl/core' %>
<% 
	List<String> cart= new ArrayList<>();
	
	Cookie[] cookies = request.getCookies();
	StringTokenizer st = null;
	for(Cookie cookie:cookies){
		if(cookie.getName().equals("cart")){
			String tmp = cookie.getValue();
			st = new StringTokenizer(tmp, "/");
			while(st.hasMoreTokens()) cart.add(st.nextToken());
		}
	}
%>