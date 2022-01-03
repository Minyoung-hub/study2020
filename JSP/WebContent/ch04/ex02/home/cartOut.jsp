<%@ page language='java' contentType='text/html; charset=UTF-8'
    pageEncoding='UTF-8'%>
<%@ page import = 'java.util.List, java.util.ArrayList' %>
<%@ page import = 'java.util.StringTokenizer' %>
<a href='main.html'>상품</a>
<h3>장바구니</h3>
<%
	List<String> cart= new ArrayList<>();
	
	Cookie[] cookies = request.getCookies();
	StringTokenizer st = null;
	for(Cookie cookie:cookies){
		if(cookie.getName().equals("cart")){
			String tmp = cookie.getValue();
			st = new StringTokenizer(tmp, "/");
			while(st.hasMoreTokens()) cart.add(st.nextToken());
		}else if(cookie.getName().equals("delcart")){
			String tmp = cookie.getValue();
			st = new StringTokenizer(tmp, "/");
			while(st.hasMoreTokens()) cart.remove(st.nextToken());
		}
	}
	
	String upProd="";
	for(String prod:cart) upProd += prod + "/";
	Cookie cookie = new Cookie("cart", upProd);
	cookie.setMaxAge(60*60*24*365);
	response.addCookie(cookie);
%>
	<ul>
<%
	for(String product:cart){
%>
	<li><%=product %></li>
<%
	}
%>
	</ul>