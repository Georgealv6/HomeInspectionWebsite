function sendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "georgealvarado305@gmail.com",
    Password: "D207A8C8AAA852497BE4155879E505B6A03C",
    To: "georgealvarado305@gmail.com",
    From: document.getElementById("email").value,
    Subject: "New Enquiry",
    Body:
      "Name:" +
      document.getElementById("firstname").value +
      document.getElementById("lastname") +
      "</br> Email:" +
      document.getElementById("email").value +
      "</br> Message:" +
      document.getElementById("message").value,
  }).then((message) => alert(message));
}
