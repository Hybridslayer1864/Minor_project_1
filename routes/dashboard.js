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

router.get('/', (req, res) => {
    res.render('dashboard'); // no .ejs extension needed
    
  });
  
module.exports=router;