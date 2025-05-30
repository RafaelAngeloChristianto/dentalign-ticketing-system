const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

const userSendMail = (to, otp, titleTxt, res) => {
    let config = {
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD
        }
    }

    let transporter = nodemailer.createTransport(config);

    let mailOptions = {
        from: process.env.EMAIL_USER,
        to: to,
        subject: `Dentalign - OTP Verification`,
        html: `
            <html>
                <body style="font-family: Arial, sans-serif; background-color: #e8f0fe; padding: 20px;">
                    <div style="max-width: 600px; margin: auto; background-color: #ffffff; padding: 25px; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                        <h2 style="color: #0072ce;">${titleTxt}</h2>
                        <p style="font-size: 16px; color: #333;">Dear Dentalign User,</p>
                        <p style="font-size: 16px; color: #333;">
                            To proceed with your request, please use the following One-Time Password (OTP). This code will expire in 10 minutes.
                        </p>
                        <h1 style="font-size: 36px; color: #0072ce; letter-spacing: 6px; margin: 20px 0;">${otp}</h1>
                        <p style="font-size: 14px; color: #555;">
                            If you did not request this OTP, please disregard this message or contact our support team.
                        </p>
                        <p style="font-size: 14px; color: #555; margin-top: 30px;">
                            Best regards,<br/>
                            The Dentalign Team<br/>
                            Your trusted dental clinic
                        </p>
                    </div>
                </body>
            </html>
        `
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) return err;
        return info;
    });
}

module.exports = { userSendMail };