const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const session = require('express-session');

const loginRoute = require('./routes/login');
const signupRoute = require('./routes/signup');
const dashboard=require('./routes/dashboard');

app.use(express.json());
app.use(cors());
app.use(session({
  secret: 'your-secret-key',   // A secret key to sign the session cookie
  resave: false,               // Don't save session if not modified
  saveUninitialized: true,     // Save the session even if it's not initialized
  cookie: { secure: false }    // For HTTP, set secure: false (set to true for HTTPS)
}));
// Serve static files from 'public'
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Mount routes
app.use('/login', loginRoute);
app.use('/signup', signupRoute);
app.use('/dashboard',dashboard);
app.listen(3000, (err) => {
  if (err) {
    console.log("Error starting server");
  } else {
    console.log("Server running at http://localhost:3000");
  }
});