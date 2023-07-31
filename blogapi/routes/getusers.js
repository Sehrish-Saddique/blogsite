const express=require('express'); //To require express module node js
const router=express.Router();
const connection=require('../database/sql')

router.get('/',(req,res)=>{
    connection.query(`SELECT * FROM Register`,(err,result)=>{
        if(err){
            console.log(err);
        }else{
            console.log(result);
            res.send(result);
        }
    })
})
module.exports = router;