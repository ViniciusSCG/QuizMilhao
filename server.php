<?php


define("NOME_DO_BANCO", "mysql");
define("BANCO", "QUIZAPP");
define("USUARIO", "root");
define("SENHA", "123456");

$con = new PDO("mysql:host=localhost;dbname=" . BANCO, USUARIO, SENHA);

$con = $con->prepare("SELECT * FROM perguntas");

$con->execute();

$valor = $con->fetchAll();

var_dump($valor);

