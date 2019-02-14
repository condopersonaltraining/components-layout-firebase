const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
// Configure the email transport using the default SMTP transport and a GMail account.
// For other types of transports such as Sendgrid see https://nodemailer.com/transports/
// TODO: Configure the `gmail.email` and `gmail.password` Google Cloud environment variables.
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

// Sends an email confirmation when a user changes his mailing list subscription.
exports.sendEmailConfirmation = functions.database.ref('/{messageID}').onWrite(async (change) => {
  const snapshot = change.after;
  const val = snapshot.val();

  const userName = val.name;
  const userEmail = val.email;
  const userMessage = val.message;

  const mailOptions = {
    from: '"Amenity.io" <paulelliottfitness@gmail.com>',
    to: "paulelliottfitness@gmail.com",
  };
  // Building Email message.
  mailOptions.subject = 'Message From: ' + userName + ' <' + userEmail + '>';
  mailOptions.text = userMessage;
  try {
    await mailTransport.sendMail(mailOptions);
    console.log('E-mail Sent');
  } catch(error) {
    console.error('There was an error while sending the email:', error);
  }
  return null;
});
