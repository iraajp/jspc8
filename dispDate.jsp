<%@page language="java" isThreadSafe="false" import="java.io.*,java.util.*" %>
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>8.1 dispDate.jsp</title>
</head>
<body bgcolor="white">
<h2>8.1 dispDate.jsp</h2>
<%
Date now = new Date();
out.println(now.toString());
out.println("<br>");
out.println(now.toGMTString());
%>
<p><a href="index.jsp">Back to index</a></p>
</body>
</html>
