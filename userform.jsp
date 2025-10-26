<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>User Form</title>
  </head>
  <body>
    <h2>User Information Form</h2>
    <form action="userinfo1.jsp" method="GET">
      <label>User Name: <input type="text" name="userName" required /></label
      ><br /><br />
      <label>Birth Date: <input type="date" name="birthDate" required /></label
      ><br /><br />
      <label>Email: <input type="email" name="emailAddr" required /></label
      ><br /><br />
      <label>Lucky No: <input type="number" name="luckyNo" required /></label
      ><br /><br />
      <button type="submit">Submit</button>
    </form>
    <p><a href="index.jsp">Back to index</a></p>
  </body>
</html>
