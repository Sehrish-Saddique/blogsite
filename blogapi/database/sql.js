const mysql = require('mysql');
const connection = mysql.createConnection({
     
})


connection.connect((err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Connected to database");
    }
})

module.exports = {connection};