const express = require('express');
const app = express();
const port = 3006;

app.use(express.static(__dirname));

// API for dispDate
app.get('/api/date', (req, res) => {
  const now = new Date();
  res.json({
    date: now.toString(),
    gmt: now.toGMTString()
  });
});

// API for greetings
app.get('/api/greeting', (req, res) => {
  const hour = new Date().getHours();
  let greeting;
  
  if (hour < 12) {
    greeting = 'Good morning!';
  } else if (hour < 18) {
    greeting = 'Good afternoon!';
  } else {
    greeting = 'Good evening!';
  }
  
  res.json({ message: greeting, time: new Date().toLocaleTimeString() });
});

// API for userinfo
app.get('/api/userinfo', (req, res) => {
  res.json({
    name: req.query.userName || '',
    birthDate: req.query.birthDate || '',
    email: req.query.emailAddr || '',
    luckyNumber: req.query.luckyNo || ''
  });
});

app.listen(port, () => {
  console.log('Server running on http://localhost:' + port);
});
