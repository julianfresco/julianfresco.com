<?php

// Recipient info
$email_to   = "contact@example.com";
$email_from = "info@example.com";

// Submitted data
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
@$name       = $request->name;
@$user_email = $request->user_email;
@$phone      = $request->phone;
@$subject    = $request->subject;
@$message    = $request->message;

// Validate data
$error_message = "";
$email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
if(!preg_match($email_exp,$user_email)) {
  $error_message .= 'The Email Address you entered does not appear to be valid.<br />';
}
if(strlen($message) < 2) {
  $error_message .= 'The Comments you entered do not appear to be valid.<br />';
}
if(strlen($error_message) > 0) {
  header('Content-Type: application/json');
  print(json_encode(
    array(
      'status' => '404',
      'message' => $error_message,
    )
  ));
}
$email_message = "The following message was submitted via webform from julianfresco.com\n\nData:\n";

function clean_string($string) {
  $bad = array("content-type","bcc:","to:","cc:","href");
  return str_replace($bad,"",$string);
}

$email_message .= "Name: ".clean_string($name)."\n";
$email_message .= "Email: ".clean_string($user_email)."\n";
$email_message .= "Phone number: ".clean_string($phone)."\n";
$email_message .= "Subject: ".clean_string($subject)."\n";
$email_message .= "Message: ".clean_string($message)."\n";

// create email headers
$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();

try
{
  mail($email_to, $subject, $email_message, $headers);

  header('Content-Type: application/json');
  print(json_encode(
    array(
      'status' => '200',
      'message' => 'Your message was sent successfully.',
    )
  ));
}
catch (Exception $e)
{
  header('Content-Type: application/json');
  print(json_encode(
    array(
      'status' => '404',
      'message' => 'Mail was unable to be sent.',
    )
  ));
}

