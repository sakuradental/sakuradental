function emailSend(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "sakuradntl@gmail.com",
        Password : "E4AA2706E0A75E0D51D31E066319DD65F950",
        To : 'sakuradntl@gmail.com',
        From : "sakuradntl@gmail.com ",
        Subject : "This is the subject",
        Body : "And this is the body for test appointment"
    }).then(
      message => alert("Your Appointment is successful")
    );
}