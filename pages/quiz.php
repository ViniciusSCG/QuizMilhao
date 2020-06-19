<?php


define("NOME_DO_BANCO", "mysql");
define("BANCO", "QUIZAPP");
define("USUARIO", "root");
define("SENHA", "123456");

$con = new PDO("mysql:host=localhost;dbname=" . BANCO, USUARIO, SENHA);

$con = $con->prepare("SELECT * FROM perguntas");

$con->execute();

$valor = $con->fetchAll();
$valor = json_encode($valor);



?>


<!DOCTYPE html>
<html lang="pt_br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quiz App</title>

    <link rel="stylesheet" href="../styles/styles.css">
    <link rel="stylesheet" href="../styles/quiz.css">


</head>
<body>
    <div class="container">
        <div id="quiz" class="justify-center flex-column">
            <div id="hud">
                <div id="hud-item">
                    <p id="progressText" class="hud-text">
                        Questão
                    </p>
                    <div id="progressBar">
                        <div id="progressBarFull"></div>
                    </div>
                    
                </div>
   
                <div id="hud-item">
                    <p class="hud-text">
                        R$
                    </p>
                    <h1 class="hud-main-text" id="score">
                        0
                    </h1>
                </div>
            </div>
            <h2 id="question">Questão teste do app></h2>
            <div id="testando">
                <div class="choice-container">
                    <p class="choice-prefix">A</p>
                    <p class="choice-text" id="choice_number" data-number="1">Choice 1</p>
                </div>
                <div class="choice-container">
                    <p class="choice-prefix">B</p>
                    <p class="choice-text" id="choice_number" data-number="2">Choice 2</p>
                </div>
                <div class="choice-container">
                    <p class="choice-prefix">C</p>
                    <p class="choice-text" id="choice_number" data-number="3">Choice 3</p>
                </div>
                <div class="choice-container">
                    <p class="choice-prefix">D</p>
                    <p class="choice-text" id="choice_number" data-number="4">Choice 4</p>
                </div>
            </div>    
            <div class="button-hud">
                <button onclick="skipQuestion()">
                    <li id="skip">
                        <img src="../assets/skip.svg" width="50px">
                        <span>Pular</span>
                    </li>
                </button>
                
                <button onclick="fiftyQuestion()">
                    <li id="fifty">
                        <img src="../assets/half.svg" width="50px">
                        <span>Remover</span>
                    </li>
                </button>
                
                
                <button>
                    <li id="idea">    
                        <img src="../assets/lamp.svg" width="50px">
                        <span>Dica</span>
                    </li>
                </button>
                    
                

                <input type="hidden" id="gambiarra" value='<?=$valor?>'>
            </div>
        </div>
    </div>
    <div id="modal" class="hide">
        <div class="content">
            <div class="header">
                <h1>Dica!</h1>
                <a href="#">Fechar</a>
            </div>
                <div class="idea field">
                    <p id="p-idea"></p>
                    <button id="modal-idea">
                        <p id="p-button">PRONTO !</p>
                    </button>
                </div>
            </form>
        </div>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.0/axios.js"></script>
    <script src="../scripts/axios.js"></script>
    <script src="../scripts/quiz.js"></script>
    <script src="../scripts/modalIdea.js"></script>
    
  
</body>
</html>
