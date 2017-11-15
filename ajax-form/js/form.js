$(document).ready(function () {
  
  //E-mail Ajax Send
  $("#form").submit(function () { //Change class or id form
    const form = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change way to file mail.php
      data: form.serialize()
    }).done(function () {
      alert("Thank you!");
      setTimeout(function () {
        // Done Functions
        form.trigger("reset");
      }, 1000);
    });
    return false;
  });

});