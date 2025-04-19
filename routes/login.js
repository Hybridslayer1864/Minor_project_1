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
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
  })
  router.post('/',(req,res)=>{
      const {username,password}=req.body;
      const query="SELECT * FROM users WHERE username=? AND password=?";
      db.query(query,[username,password],(err,result)=>{
          if(err){
              return res.json({status:"failure",err:"DB"});
          }
          else if(result.length>0){
            req.session.username = username;  
            return res.json({status:"success"});
              
          }
          else{
              return res.json({status:"failure",err:"UDE"});
          }
      })
      
  })
  module.exports = router;
