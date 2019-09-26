const nodemailer = require("nodemailer");
const config = require("../config");
const logger = require("./logger");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: config.emailNotification.email,
        pass: config.emailNotification.pass
    },
    tls: {
        rejectUnauthorized: false
    }
});

exports.sendMail = function(to, html, subject){
    const mailOptions = {
        from: config.emailNotification.email,
        to: to,
        subject: subject || "Notificación chila",
        html: html
    };
    transporter.sendMail(mailOptions, (err, info)=>{
        if(err){
            logger.error(err);
        }else{
            logger.info(info);
        }
    });
}