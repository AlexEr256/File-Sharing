const nodemailer = require("nodemailer");
const path = require('path');
const hbs = require('nodemailer-handlebars');



let transporter = nodemailer.createTransport({
    host: "smtp.mail.ru",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'file_sharing98@mail.ru', 
      pass: 'FileSharingApp', 
    }
  },
    {
      from: 'file_sharing98@mail.ru'
    }
  );

  transporter.use('compile', hbs({
    viewEngine:{
      extName: ".hbs",
      defaultLayout: false 
    },
    viewPath: path.join(__dirname, '../views/'),
    extName:'.hbs'
  }))

module.exports = transporter;