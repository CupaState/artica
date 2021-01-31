<?php

// https://api.telegram.org/bot1385843266:AAFTGAOy84nXQta1NGTD5p7ks3_ZmjTEp58/getUpdates


$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$token = "1385843266:AAFTGAOy84nXQta1NGTD5p7ks3_ZmjTEp58";
$chat_id = "-451962769";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Email' => $email
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: ThanksModal.js');
} else {
  echo "Error";
}
?>