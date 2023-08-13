<?php
use PHPMailer\PHPMailer\PHPMailer;
require 'vendor/autoload.php';

// Definitions
$USER_NAME = 'info@livemarama.com';
$PASSWORD = 'QC*g@J7p9Th2rFay';
$SMTP_HOST = 'ssl://smtp.titan.email';
$SMTP_PORT = '465';

// SMTP setup
$mail = new PHPMailer;
$mail->isSMTP();
$mail->Host = $SMTP_HOST;
$mail->Port = $SMTP_PORT;
$mail->SMTPDebug = 0;
$mail->SMTPAuth = true;
$mail->Username = $USER_NAME;
$mail->Password = $PASSWORD;

// Email headers
$mail->setFrom($USER_NAME, 'Live Marama');
$mail->addAddress('mehanyw@gmail.com', 'Waseem Mehany');
// $mail->addAddress('marama@sierrasothebysrealty.com', 'Jenny Johnson');
$mail->Subject = 'Contact Form';

// Email body
$mail->isHTML(false);
$referredBy = "-";
if (array_key_exists('referred-by', $_POST)) {
    $referredBy = $_POST["referred-by"];
}
$mail->Body = <<<EOT
	First name: {$_POST["first-name"]}
	Last name: {$_POST["last-name"]}
	Email: {$_POST["email"]}
	Phone number: {$_POST["phone"]}
	Zip code: {$_POST["zip"]}

	How did you hear about us?: {$referredBy}

	Are you a broker?: {$_POST["broker"]}
	Are you working with a broker?: {$_POST["with-broker"]}
EOT;

if (!$mail->send()) {
	echo '<script>alert("Sorry, try again!")</script>';
} else {
	header("Location:https://www.livemarama.com/pages/contactSuccess.html");
}
?>