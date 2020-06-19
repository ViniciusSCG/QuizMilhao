const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const skip = document.getElementById("skip");
const progressBarFull = document.getElementById("progressBarFull");
const gambs = document.getElementById("gambiarra");
const fifty = document.getElementById("fifty");
const idea = document.getElementById("p-idea");



let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];
let skipValue = 3;
let correctQuestion = 0;
let fiftyValue = 1;
let ideaValue = 1;


let questions = [];

questions = JSON.parse(gambs.value);

// let questions = [
//   {
//     question: "TESTANDO PERGUNTA 1?",
//     choice1: "VERDADE",
//     choice2: "incorreta",
//     choice3: "incorreta",
//     choice4: "incorreta",
//     answer: 1
//   },
//   {
//     question:
//       "TESTANDO PERGUNTA 2?",
//     choice1: "incorreta",
//     choice2: "incorreta",
//     choice3: "correta",
//     choice4: "incorreta",
//     answer: 3
//   },
//   {
//     question: " TESTANDO PERGUNTA 3?",
//     choice1: "incorreta",
//     choice2: "incorreta",
//     choice3: "incorreta",
//     choice4: "correta",
//     answer: 4
//   },

//   {
//     question: " TESTANDO PERGUNTA 3?",
//     choice1: "incorreta",
//     choice2: "incorreta",
//     choice3: "incorreta",
//     choice4: "correta",
//     answer: 4
//   },

//   {
//     question: " TESTANDO PERGUNTA 3?",
//     choice1: "incorreta",
//     choice2: "incorreta",
//     choice3: "incorreta",
//     choice4: "correta",
//     answer: 4
//   }
// ];

let correct_bonus = 1000;
let MAX_QUESTIONS = 10;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuesions = [...questions];
  getNewQuestion();

};



getNewQuestion = () => {
  if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    localStorage.setItem("score", score);
    //muda de pagina ao fim do quiz
    return window.location.assign("end.html");
  }

  questionCounter++;
  if (questionCounter == 10 ) {
    skip.style.background = "#443b3b";
    skip.style.borderStyle = "none";
    skip.style.cursor = "none";
  }
  progressText.innerText = `Questão ${questionCounter}/${MAX_QUESTIONS}`;
  // atualiza a barra de questão
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  const questionIndex = Math.floor(Math.random() * availableQuesions.length);
  currentQuestion = availableQuesions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
   

  });

  availableQuesions.splice(questionIndex, 1);
  acceptingAnswers = true;
  console.log("testando log"+currentQuestion.dica)
  
};

skipQuestion = () => {
  
  if (skipValue != 0) {
    // questionCounter++;
    progressText.innerText = `Questão ${questionCounter}/${MAX_QUESTIONS}`;
    // atualiza a barra de questão
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

    const questionIndex = Math.floor(Math.random() * availableQuesions.length);
    currentQuestion = availableQuesions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
      const number = choice.dataset["number"];
      choice.innerText = currentQuestion["choice" + number];
    });

    availableQuesions.splice(questionIndex, 1);

    skipValue--;

    removeClass();


    if (skipValue <= 0) {
      skip.style.background = "#443b3b";
      skip.style.borderStyle = "none";
      skip.style.cursor = "none";
    }
  }
}


removeClass = () =>{
  const disableAnswer = document.querySelectorAll(' div > p[data-number].invisible')   
    for (let i = 0; i < disableAnswer.length; i++) {
     disableAnswer[i].classList.remove("invisible")
      
    }
}



fiftyQuestion = () => {
  let rand = [];
  choices.forEach(choices => {
    var flag = 0;
    if (fiftyValue != 0) {
        while (flag <= 2) {
          rand[flag] = (Math.floor(Math.random() * 4) +1);
          if (rand[flag] != currentQuestion.answer && rand[0] != rand[1]){
            flag++;

          }
        }
        fiftyValue--;
      
    }
    
  })
  console.log(rand[0]);
  console.log(rand[1]);
  // const disableAnswer = document.querySelector(' div > p[data-number="'+rand[0]+'"] ')
  // const disableAnswer2 = document.querySelector(' div > p[data-number="'+rand[1]+'"] ')

  for (var i = 0; i<=1; i++){
    let disableAnswer = document.querySelector(' div > p[data-number="'+rand[i]+'"] ')
    disableAnswer.classList.add("invisible");
  }

  // disableAnswer.classList.add("invisible");
  // disableAnswer2.classList.add("invisible")
 
  fifty.style.cursor = "none";
  fifty.style.background = "#443b3b";
  fifty.style.borderStyle = "none";

}


choices.forEach(choice => {
  choice.addEventListener("click", e => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    // const classToApply = 'incorrect';
    //     if(selectedAnswer === currentQuestion.answer){
    //         classToApply = 'correct';
    //     }
    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply === "correct") {
      incrementScore(correct_bonus);
      correctQuestion++

      switch (correctQuestion) {
        
        case 1:
          correct_bonus = 5000;
          break;
        case 2:
          correct_bonus = 10000;
          break;
        case 3:
          correct_bonus = 25000;
          break;
        case 4:
          correct_bonus = 50000;
          break;
        case 5:
          correct_bonus = 100000;
          break;
        case 6:
          correct_bonus = 200000;
          break;
        case 7:
          correct_bonus = 500000;
          break;
        case 8:
          correct_bonus = 750000;
          break;
        case 9:
          correct_bonus = 1000000;
          break;
      }
    }

    if (classToApply === "incorrect"){
      localStorage.setItem('score',document.getElementById('score').innerHTML)
      setTimeout(() => {
        return window.location.assign("end.html");
      }, 1000);
    }

    selectedChoice.parentElement.classList.add(classToApply);
  

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
    removeClass();
  });
});



incrementScore = num => {

  score = num;
  scoreText.innerText = score;
};

startGame();