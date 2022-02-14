<?php

if($_POST["submit"]) {
    $recipient="raphealayo056@gmail.com";
    $subject="From Raph Crypto News";
    $sender=$_POST["sender"];
    $senderEmail=$_POST["email"];
    $message=$_POST["message"];

    $mailBody="Name: $sender\nEmail: $senderEmail\n\n$message";

    mail($recipient, $subject, $mailBody, "From: $sender <$senderEmail>");

    $thankYou="<p>Thank you! Your message has been sent.</p>";
}

?>