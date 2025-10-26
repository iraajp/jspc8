const express = require('express');
const app = express();
const port = 3006;

// Serve static files from current directory
app.use(express.static(__dirname));

// Main index page with links to all three programs
app.get('/', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Practical 8: JSP Programs (Combined)</title>
  <style>
    body {
      font-family: system-ui, -apple-system, Arial, sans-serif;
      padding: 20px;
      background-color: white;
    }
    .program-link {
      display: block;
      padding: 15px;
      margin: 10px 0;
      background-color: #f0f0f0;
      text-decoration: none;
      color: #333;
      border-radius: 5px;
      border-left: 4px solid #007acc;
    }
    .program-link:hover {
      background-color: #e0e0e0;
    }
  </style>
</head>
<body>
  <h1>Practical 8: JSP Implicit and Explicit Objects Programs</h1>
  <p>This server combines all three JSP examples:</p>
  
  <a href="/dispDate.jsp" class="program-link">
    <strong>8.1 dispDate.jsp</strong><br>
    Display current date and time
  </a>
  
  <a href="/greetings.jsp" class="program-link">
    <strong>8.2 greetings.jsp</strong><br>
    Time-based greeting message
  </a>
  
  <a href="/userform.html" class="program-link">
    <strong>8.3 userinfo1.jsp</strong><br>
    User information form (submit to userinfo1.jsp)
  </a>
</body>
</html>
  `);
});

// 8.1 dispDate.jsp - Display current date/time
app.get('/dispDate.jsp', (req, res) => {
  const now = new Date();
  
  res.send(`
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>8.1 dispDate.jsp</title>
  <style>
    body {
      font-family: system-ui, -apple-system, Arial, sans-serif;
      padding: 20px;
      background-color: white;
    }
  </style>
</head>
<body bgcolor="white">
  <h2>8.1 dispDate.jsp - Display Date and Time</h2>
  <p><strong>Current Date/Time (toString):</strong></p>
  <p>${now.toString()}</p>
  <p><strong>GMT String (toGMTString):</strong></p>
  <p>${now.toGMTString()}</p>
  <p><a href="/">← Back to index</a></p>
</body>
</html>
  `);
});

// 8.2 greetings.jsp - Time-based greeting
app.get('/greetings.jsp', (req, res) => {
  const clock = new Date();
  const hour = clock.getHours();
  
  let greeting;
  if (hour < 12) {
    greeting = '<h1>Good morning!</h1>';
  } else if (hour < 18) {
    greeting = '<h1>Good afternoon!</h1>';
  } else {
    greeting = '<h1>Good evening!</h1>';
  }
  
  res.send(`
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>8.2 greetings.jsp</title>
  <style>
    body {
      font-family: system-ui, -apple-system, Arial, sans-serif;
      padding: 20px;
      background-color: white;
    }
  </style>
</head>
<body bgcolor="white">
  <h2>8.2 greetings.jsp - Time-based Greetings</h2>
  ${greeting}
  <p>Welcome to our site, open 24 hours a day.</p>
  <p><small>Current time: ${clock.toLocaleTimeString()}</small></p>
  <p><a href="/">← Back to index</a></p>
</body>
</html>
  `);
});

// 8.3 userinfo1.jsp - Display submitted user info
app.get('/userinfo1.jsp', (req, res) => {
  const name = req.query.userName || '(not provided)';
  const bdate = req.query.birthDate || '(not provided)';
  const email = req.query.emailAddr || '(not provided)';
  const lucky = parseInt(req.query.luckyNo) || 0;
  
  // HTML escape function
  const escape = (str) => String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
  
  res.send(`
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>8.3 userinfo1.jsp</title>
  <style>
    body {
      font-family: system-ui, -apple-system, Arial, sans-serif;
      padding: 20px;
      background-color: white;
    }
    ul {
      line-height: 2;
    }
  </style>
</head>
<body bgcolor="white">
  <h2>8.3 userinfo1.jsp - User Information Display</h2>
  <ul>
    <li>Name : ${escape(name)}</li>
    <li>BirthDate : ${escape(bdate)}</li>
    <li>EMail : ${escape(email)}</li>
    <li>Lucky : ${lucky}</li>
  </ul>
  <p><a href="/userform.html">← Back to form</a> | <a href="/">Home</a></p>
</body>
</html>
  `);
});

app.listen(port, () => {
  console.log(`Practical 8 (JSP Combined) running at http://localhost:${port}/`);
  console.log('Available routes:');
  console.log('  - http://localhost:${port}/');
  console.log('  - http://localhost:${port}/dispDate.jsp');
  console.log('  - http://localhost:${port}/greetings.jsp');
  console.log('  - http://localhost:${port}/userform.html');
});
