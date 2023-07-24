<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

$name = $_POST["name"];
$email = $_POST["email"];
$subject = $_POST["subject"];
$message = $_POST["message"];

require "../vendor/autoload.php";


$mail = new PHPMailer(true);

$mail->isSMTP();
$mail->SMTPAuth = true;

$mail->Host = "smtp.example.com";
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->Port = 587;

$mail->Username = "georgealvarado305@gmail.com"; 
$mail->Password = "nrdqbumvnyrskzbq";

$mail->setFrom($email, $name);
$mail->addAddress("georgealvarado305@gmail.com", "George");

$mail->Subject = $subject;
$mail->Body = $message;

$mail->send();
