const emailUser = process.env.MAIL_USER;
const emailPass = process.env.MAIL_PASS;
const nodemailer = require("nodemailer");

exports.confirmation = async(doc)=>{
  const {email, subject, text,html} = doc

    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: emailUser, // generated ethereal user
          pass: emailPass // generated ethereal password
        }
      });
        // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Ather Ahmad " <atherdci.com>', // sender address
    to: email, // list of receivers
    subject: subject, // Subject line
    text: text, // plain text body
    html: html// html body
  });
  console.log("Message sent: %s", info.messageId);
  if(info.messageId) return true
    else return false
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  //console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

}