const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const brevo = require('@getbrevo/brevo');

const app = express();

// Parse JSON and URL-encoded bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
  origin: 'http://localhost:3000'
}));

app.use(cors(), function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Define a route to handle form data
app.post('/contactInput', (req, res) => {
  const formData = req.body;
  // Process the form data here
  console.log(formData);

  //Sending email 

  let defaultClient = brevo.ApiClient.instance;

  let apiKey = defaultClient.authentications['api-key'];
  apiKey.apiKey = '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';

  let apiInstance = new brevo.TransactionalEmailsApi();
  let sendSmtpEmail = new brevo.SendSmtpEmail();

  sendSmtpEmail.subject = "Message from Portfolio Contacts";
  sendSmtpEmail.htmlContent = `<html><body><h1>${formData.message}</h1></body></html>`;
  sendSmtpEmail.sender = { "name": formData.name, "email": formData.mail };
  sendSmtpEmail.to = [
    { "email": "niki4etooo@gmail.com", "name": "Nikolai Nanev" }
  ];
  sendSmtpEmail.replyTo = { "email": "example@brevo.com", "name": "sample-name" };
  sendSmtpEmail.headers = { "Some-Custom-Name": "unique-id-1234" };
  sendSmtpEmail.params = { "parameter": "My param value", "subject": "Contacts" };


  apiInstance.sendTransacEmail(sendSmtpEmail).then(function (data) {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
  }, function (error) {
    console.error(error);
  });

  res.send('Form data received!');
});

const PORT = 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});