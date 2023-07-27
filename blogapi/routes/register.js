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

/* GET users listing. */
router.post('/', function(req, res, next) {
  
  const name=req.body.name;
    const password=req.body.password;

    console.log(name,password);
    res.send("hello");
    res.send(name);

});

module.exports = router;
