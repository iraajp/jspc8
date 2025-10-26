# Practical 8: JSP Implicit and Explicit Objects Programs (Combined)

This folder contains all three JSP examples in one server for easy running.

## Programs included

- **8.1 dispDate.jsp** - Display current date and time
- **8.2 greetings.jsp** - Time-based greeting message
- **8.3 userinfo1.jsp** - User information form and display

## How to run

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm start
```

3. Open in browser:
```
http://localhost:3006/
```

## Available Routes

- `http://localhost:3006/` - Index page with links to all programs
- `http://localhost:3006/dispDate.jsp` - Display current date/time
- `http://localhost:3006/greetings.jsp` - Time-based greeting
- `http://localhost:3006/userform.html` - User info form (submits to userinfo1.jsp)

## Direct test URL for userinfo1.jsp

```
http://localhost:3006/userinfo1.jsp?userName=John&birthDate=1990-01-01&emailAddr=john@example.com&luckyNo=7
```

## What each program demonstrates

### 8.1 dispDate.jsp
- Uses `Date` object to get current time
- Displays in multiple formats (toString, toGMTString)
- JSP concept: `java.util.Date` and `out.println()`

### 8.2 greetings.jsp
- Conditional logic based on server time
- Dynamic greeting: morning (before 12), afternoon (12-18), evening (after 18)
- JSP concept: conditional statements and `Date.getHours()`

### 8.3 userinfo1.jsp
- Accepts request parameters from a form
- Displays user information in a list
- JSP concept: `request.getParameter()` and type conversion

## Original JSP Code References

All programs are Node.js equivalents of the original JSP implementations. See individual README files in separate folders for JSP code references.
