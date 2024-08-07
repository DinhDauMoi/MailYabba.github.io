const sendMail = document.getElementById("send_mail");
const messages = document.getElementById("message");
const lirep = document.getElementById("lirep");
sendMail.onclick = () => {
    (function () {
            emailjs.init("kRD4qW0e9ZVUOWPwG");

    })();
    var params = {
      subject: "hi",
      message: message.value,
    };
    var serID = "service_prpcxjj";
    var tempID = "template_ne6458j";
    emailjs.send(serID, tempID, params).then(res => {
      // Xử lý thêm tin nhắn vào
      lirep.innerText = `${messages.value}`;
      lirep.style = "display:block";
      messages.value = "";
    }).catch();


    
}