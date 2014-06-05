<?php
$mongo = new Mongo(/*"localhost:3001"*/);


$chat = $mongo->chat;

$messages = $chat->messages;



$message = array(
		'name' => 'Amit',
		'message' => 'Hello World!!!!',
		'date' => new MongoDate(/*time()*/)

	
	);


$messages->insert($message);
?>