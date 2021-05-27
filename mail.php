<?php

//В переменную $token нужно вставить токен, который нам прислал @botFather
$token = "1604543236:AAFlunpFH89VlIaW77IvoxEYLlYy2ND9fUE";

//Сюда вставляем chat_id
$chat_id = "-582137612";

//Определяем переменные для передачи данных из нашей формы
if ($_POST['act'] == 'order') {
    $phone = ($_POST['number']);

    if(trim(!empty($_POST['gifts']))) {
      $gift = ($_POST['gifts']);  
    }

//Собираем в массив то, что будет передаваться боту
    if(trim(!empty($_POST['gifts']))) {
       $arr = array(
        'Подарок:' => $gift,
        'Телефон:' => $phone
    );
    } else {
     $arr = array(
        'Телефон:' => $phone
    );   
    }
//Настраиваем внешний вид сообщения в телеграме
    foreach($arr as $key => $value) {
        $txt .= "<b>".$key."</b> ".$value."%0A";
    };

//Передаем данные боту
    $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

//Выводим сообщение об успешной отправке
    if ($sendToTelegram) {
    header('Location: http://a0521022.xsph.ru/thank-you.html');
    }

//А здесь сообщение об ошибке при отправке
    else {
    alert('Что-то пошло не так. ПОпробуйте отправить форму ещё раз.');
    }
}

?>