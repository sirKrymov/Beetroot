$(document).ready(function() {
	
	//E-mail Ajax Send
	$("#form").submit(function() { //Change name-class or id form
		let th = $(this);
		$.ajax({
			type: "POST",
			url: "php/mail.php", //Change way to file mail.php
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});


});