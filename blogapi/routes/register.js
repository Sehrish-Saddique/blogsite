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
    const text=req.body.text;

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
    const blogdata={
      Text:text,
    }
      connection.query(`INSERT INTO Register SET ?`,data ,(err,result)=>{
        if(err){
          console.log(err);
        }else{
          console.log("Data has been inserted");
      //     transporter.sendMail(mailOption,(error,info)=>{
      
      //       if (error) {
      //        throw error; // Handle the error, or use proper error handling instead of throwing.
      //      } else {
      //        // Access the 'info' object to get information about the sent email
      //        console.log("Email sent: " + info.response); // 'info.response' contains the response message from the email server.
      //        //
          
      //  }});
        }
      })
      
    console.log(name,password,file);
   

})

module.exports = router;
