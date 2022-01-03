<%@ page language='java' contentType='text/html; charset=UTF-8'
    pageEncoding='UTF-8'%>
<% 
   String userName = request.getParameter("userName");
   String nickName = request.getParameter("nickName");
   String age = request.getParameter("age");
   System.out.println("userName: " + userName);
   System.out.println("age: " + age);
   
   if(userName == null) System.out.println("1");
   if(userName.equals("")) System.out.println("2");   
   if(nickName == null) System.out.println("3");
   if(nickName.equals("")) System.out.println("4");   
   if(age == null) System.out.println("11");
   if(age.equals("")) System.out.println("12");
%>

<%
   if(userName.equals("") || age.equals("")){
%>
   이름과 나이를 입력한 뒤, 제출하세요.
   <a href='paraIn.html'>돌아가기</a>
<%
   }else{
%>   
   <%= userName %>: <%= age %>살 입니다.
<%
   } 
%>   