<?php

require('vendor/autoload.php');
define('AMQP_DEBUG', true);
use PhpAmqpLib\Connection\AMQPConnection;
use PhpAmqpLib\Message\AMQPMessage;

/**
* Create a connection to RabbitMQ
*/

$url = parse_url(getenv('CLOUDAMQP_URL'));
$conn = new AMQPConnection(
          'tiger.cloudamqp.com', //host - CloudAMQP_URL 
          5672,         //port - port number of the service, 5672 is the default
          'ohnyasyb', //user - username to connect to server
          'lhae9F38Lqc08e6ySZYlvjgVP8xWDjgI', //password - password to connecto to the server
          'ohnyasyb', 1 //vhost
);
$ch = $conn->channel();

$exchange = 'amq.direct';
$queue = 'maquinaria';
$ch->queue_declare(
          $queue, //queue name 
          false,  //passive -  check whether an exchange exists without modifying server state
          true,   //durable - RabbitMQ will never lose the queue if a crash occurs
          false,  //exclusive - if queue only will be used by one connection
          false   //autodelete - queue is deleted when last consumer unsubscribes
);

$ch->exchange_declare($exchange, 'direct', true, true, false);
$ch->queue_bind($queue, $exchange);

$msg_body = $_POST["txtDNI"]."|".$_POST["txtName"]."|".$_POST["txtAddress"]."|".$_POST["txtPhoneNumber"]."|".$_POST["txtRUC"]
            ."|".$_POST["txtCompanyName"]."|".$_POST["txtCompanyAddress"]."|".$_POST["dateStartTxt"]."|".$_POST["dateFinishTxt"]
            ."|".$_POST["codeMaq"]."|".$_POST["finalPrice"]."|Municipalidad de Chorrillos";

echo $msg_body;

$msg = new AMQPMessage($msg_body, array('content_type' => 'text/plain', 'delivery_mode' => 2));
$ch->basic_publish($msg, $exchange);

$ch->close();
$conn->close();

header('Location: add.html');