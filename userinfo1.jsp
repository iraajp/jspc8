<%@page language="java" isThreadSafe="false" import="java.io.*" %>
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>8.3 userinfo1.jsp</title>
</head>
<body bgcolor="white">
<h2>8.3 userinfo1.jsp</h2>
<%
String name, bdate, email;
int lucky;
name = request.getParameter("userName");
bdate = request.getParameter("birthDate");
email = request.getParameter("emailAddr");
lucky = Integer.parseInt(request.getParameter("luckyNo"));
%>

<ul>
<li> Name : <%= name %> </li>
<li> BirthDate : <%= bdate %> </li>
<li> EMail : <%= email %> </li>
<li> Lucky : <%= lucky %> </li>
</ul>

<p><a href="userform.jsp">Back to form</a> | <a href="index.jsp">Home</a></p>
</body>
</html>
