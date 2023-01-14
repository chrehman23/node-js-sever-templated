
const transporter = require("../utils/sendEmail");
// *************************************************************************
let count = 0;
let appServices = (module.exports = {
  sendEmail: (message) => transporter.sendMail({
    from: 'Global Fansy" <noreply@globalfansy.com>',  // sender address
    to: "mrahman9pk@gmail.com", // list of receivers
    subject: "testing emails", // Subject line
    text: message, // plain text body
    // html: message, // html body
  }).then(data => {
    console.log("Email sent successfully.", data.messageId)
    if (data.messageId) {
      return true;
    } else {
      return false;
    }
  }).catch(error => {
    console.log("Error sending email", error)
    return error.message;
  }),
  updateCount: (transactionHash) => {
    count++
  },
  getCount: () => {
    return { count }
  }
});
