const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const session = require('express-session');

const loginRoute = require('./routes/login');
const signupRoute = require('./routes/signup');
const dashboard = require('./routes/dashboard');

app.use(express.json());
app.use(cors());
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

// Serve static files from 'public'
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Ensure welcome page route is first
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "welcome.html"));
});

// Other routes
app.use('/login', loginRoute);
app.use('/signup', signupRoute);
app.use('/dashboard', dashboard);

app.listen(3000, (err) => {
  if (err) {
    console.log("Error starting server");
  } else {
    console.log("Server running at http://localhost:3000");
  }
});
