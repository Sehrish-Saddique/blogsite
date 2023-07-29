const nodemailer = require("nodemailer");
let transporter = nodemailer.createTransport(
    {
        host:'smtp.gmail.com',
        port:'345',
        secure:false,
            auth:{
                user:"",
                pass:"",
            }
        
    }
)
module.exports = {transporter};