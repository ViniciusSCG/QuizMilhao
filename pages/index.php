<!DOCTYPE html>
<html lang="pt_br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quiz App</title>
    <link rel="stylesheet" href="../styles/styles.css">
</head>
<body>
    <div class="container">
        <div id="home" class="flex-center flex-column">
            <h1>Quiz Milhão</h1>
            <a class="btn" id="name" href="#">Iniciar</a>
            <a class="btn" href="manual.html">Manual</a>
            <a class="btn" href="http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm">Lei</a>
            <a class="btn" href="rank.html">Rank</a>
        </div>
    </div>

<div id="modal" class="hide">
    <div class="content">
        <div class="header">
            <h1>Insira seu nome !</h1>
            <a href="#">Fechar</a>
        </div>
        <form action="quiz.php" id="form-modal">
            <label for="name"></label>
            <div class="name field">
                <input 
                id="input-name"
                type="text" 
                name="name"
                value=""
                placeholder="Digite um nome..."
                >
                <button>
                    <img src="../assets/play.svg" alt="Jogar">
                </button>
            </div>
        </form>
    </div>
</div>
<script src="../scripts/modal.js"></script>
</body>
</html>