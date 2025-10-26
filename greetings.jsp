<%@page language="java" isThreadSafe="false" %>
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>8.2 greetings.jsp</title>
</head>
<body bgcolor="white">
<h2>8.2 greetings.jsp</h2>
<% java.util.Date clock = new java.util.Date(); %>
<% if (clock.getHours() < 12) { %>
<h1>Good morning!</h1>
<% } else if (clock.getHours() < 18) { %>
<h1>Good afternoon!</h1>
<% } else { %>
<h1>Good evening!</h1>
<% } %>
Welcome to our site, open 24 hours a day.
<p><a href="index.jsp">Back to index</a></p>
</body>
</html>
