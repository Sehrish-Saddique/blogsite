const express=require('express');
const router=express.Router();
router.post('/',(req,res)=>{
    const name=req.body.name;
    console.log(name);
})
modules.export = router;