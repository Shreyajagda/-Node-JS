const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "shreyajagda@gmail.com",
        pass: "beryvinokudlsicn", 
    },
});

module.exports.sendOtp = (to, otp) => {
    let mailOptions = {
        from : "shreyajagda@gmail.com",
        to : to,
        subject : "OTP for your forget password request",
        text : `Your otp is ${otp}`,
    }
    transport.sendMail(mailOptions, (err) => {
        err ? console.log(err) : console.log("OTP sended successfully! ");
    })
}

