const mysql = require('mysql');
const connection = mysql.createConnection({
    host: '',
    user:"",
    password:"",
    database:"",
    port:"",
});


connection.connect((err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Connected to database");
    }
})

module.exports = {connection};