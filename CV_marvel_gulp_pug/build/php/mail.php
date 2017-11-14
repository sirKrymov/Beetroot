<?php

$method = $_SERVER['REQUEST_METHOD'];

//Script Foreach
$c = true;
if ( $method === 'POST' ) {

	$form_name = trim($_POST['form_name']);
	$form_email  = trim($_POST['form_email']);
  $form_mobile = trim($_POST['form_mobile']);
  $form_subject = trim($_POST['form_subject']);

	foreach ( $_POST as $key => $value ) {
		if ( $value != "" && $key != 'form_name' && $key != 'form_email' && $key != 'form_mobile' && $key != 'form_subject') {
			$message .= "
			" . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
			<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
			<td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
		</tr>
		";
	}
}
} else if ( $method === 'GET' ) {

	$form_name = trim($_GET['form_name']);
	$form_email  = trim($_GET['form_email']);
  $form_mobile = trim($_GET['form_mobile']);
  $form_subject = trim($_GET['form_subject']);

	foreach ( $_GET as $key => $value ) {
		if ( $value != "" && $key != 'form_name' && $key != 'form_email' && $key != 'form_mobile' && $key != 'form_subject') {
			$message .= "
			" . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
			<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
			<td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
		</tr>
		";
	}
}
}

$message = "<table style='width: 100%;'>$message</table>";

function adopt($text) {
	return '=?UTF-8?B?'.base64_encode($text).'?=';
}

$headers = "MIME-Version: 1.0" . PHP_EOL .
"Content-Type: text/html; charset=utf-8" . PHP_EOL .
'From: '.adopt($form_name).' <'.$form_email.'>' . PHP_EOL .
'Reply-To: '.$form_email.'' . PHP_EOL;

mail($form_email, adopt($form_subject), $message, $headers );
