const express=require('express');
const cors=require('cors');
const mysql=require('mysql2');
const path = require('path');
const router=express.Router();
router.use(express.json());
router.use(cors());
const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"ASHLEy_1234",
    database:"User_db"
});
router.use(express.static(path.join(__dirname,'public')));

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'signup.html'));
});
router.post('/', (req, res) => {
    const { username, password, cpassword } = req.body;
    if (password !== cpassword) {
      return res.json({ status: "failure", err: "PM" });
    }
    const search = "SELECT * FROM users WHERE username = ?";
    db.query(search, [username], (err, result) => {
      if (err) {
        return res.json({ status: "failure", err: "DB" });
      }
  
      if (result.length > 0) {
        return res.json({ status: "failure", err: "UE" });
      }
      const insert = "INSERT INTO users (username, password) VALUES (?, ?)";
      db.query(insert, [username, password], (err) => {
        if (err) {
          console.error("DB error during user insert:", err);
          return res.json({ status: "failure", err: "DB" });
        }
  
        res.json({ status: "success" });
      });
    });
  });
  
  module.exports = router;
