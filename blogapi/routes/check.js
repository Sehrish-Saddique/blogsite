const express=require('express'); //To require express module node js
const router=express.Router();
router.post('/',(req,res)=>{
    const name=req.body.name;
    const password=req.body.password;

    console.log(name,password);
})
module.exports=router;