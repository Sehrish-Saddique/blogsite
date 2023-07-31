const nodemailer = require("nodemailer");
let transporter = nodemailer.createTransport(
    {
        host:'smtp.gmail.com',
        port:'587',
        secure:false,
            auth:{
                user:"sehr.sehr1112@gmail.com",
                pass:"dkqznfbpjaiatgpk",
            }
        
    }
)
module.exports = {transporter};