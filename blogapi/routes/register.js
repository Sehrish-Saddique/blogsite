// const express=require('express'); //To require express module node js
// const router=express.Router();
// router.post('/',(req,res)=>{
//     const name=req.body.name;
//     const password=req.body.password;

//     console.log(name,password);
//     res.send("hello");
//     res.send(name)
// })
// module.exports = router;


var express = require('express');
var router = express.Router();
const multer = require('multer'); //importing multer for file upload
const {transporter}= require('../nodemailer/nodemailer')
const {connection}=require('../database/sql')


var storage = multer.diskStorage({
  destination:function(req,file,cb){ //destination for file upload
    cb(null,'./public/images/');

  },
  filename:function(req,file,cb){ //filename for file upload
    cb(null,Date.now()+file.originalname);}
})


var upload = multer({storage:storage}); //uploading file

 
/* GET users listing. */
router.post('/',upload.single('profileimage'), function(req, res, next) {
  
    const name=req.body.name;
    const password=req.body.password;
    const email=req.body.email;
    const file=req.file.filename;

    const mailOption={
      from:`Sehrish Saddique <sehr.sehr1112@gmail.com>`,
      to:email,
      subject:"You are amazing developer ",
      html:`<h1>Thank you for registering</h1>`
      
    }
    mailOption.returnInfo = true;
    const data={
      Name:name,
      Email:email,
      Password:password,
      Image:file
    }
      connection.query(`INSERT INTO Register SET ?`,data ,(err,result)=>{
        if(err){
          console.log(err);
        }else{
          console.log("Data has been inserted");
          res.redirect('http://localhost:3000/');
          transporter.sendMail(mailOption,(error,info)=>{
      
            if (error) {
             throw error; // Handle the error, or use proper error handling instead of throwing.
           } else {
             // Access the 'info' object to get information about the sent email
             console.log("Email sent: " + info.response); // 'info.response' contains the response message from the email server.
             //
          
       }});
        }
      })
    
    console.log(name,password,file);
   

})

module.exports = router;
