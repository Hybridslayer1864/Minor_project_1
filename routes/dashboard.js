const express=require('express');
const cors=require('cors');
const mysql=require('mysql2');
const path = require('path');
const router=express.Router();

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"ASHLEy_1234",
    database:"User_db"
});
router.use(express.json());
router.use(cors());
router.use(express.static(path.join(__dirname,'public')));

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'dashboard.html'));

  })

  
module.exports=router;