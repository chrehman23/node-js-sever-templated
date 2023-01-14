// EMAIL_HOST='smtp.sendgrid.net'
// EMAIL_USER='apikey'
// EMAIL_USER_PASSWORD='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'

const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    host: `smtp.sendgrid.net`,
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: `apikey`, // generated ethereal user
        pass: `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`, // generated ethereal password
    },
});

module.exports = transporter