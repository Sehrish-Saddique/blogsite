 

var express = require('express');
var router = express.Router();
const {connection}=require('../database/sql')
// const value =require("blogsite/src/components/Home/BlogList/BlogItem/Quill/index")
// const {Quill}=require("blogsite/src/components/Home/BlogList/BlogItem/Quill/index")
 


 
/* GET users listing. */
router.post('/',function(req, res, next) {
  
  const { text } ="Sample text"

     const data={
        Text:{text},
    }
      connection.query(`INSERT INTO Blog SET ?`,data ,(err,result)=>{
        if(err){
          console.log(err);
        }else{
          console.log("Blog Data has been inserted");
          res.redirect('http://localhost:3000/');
          
        }
      })
    
    console.log(data);
   

})

module.exports = router;
