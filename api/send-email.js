const sgMail = require('@sendgrid/mail');
const recipient = "mrshllbrndt@gmail.com" // fill with your email


module.exports = (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  let formEmail
  if(req.body && req.body.email){
    formEmail = req.body.email
  }
  else{
    res.json({
      message: "No email specified"
    })
  }

  const msg = {
    to: recipient,
    from: formEmail,
    subject: 'New Signup',
    text: 'New email: ' + formEmail,
    html: `<strong>New email: ${formEmail}</strong>`,
  };

  sgMail.send(msg).then(() => {
    res.json({
      message: "Success"
    })
  }, console.error)
}