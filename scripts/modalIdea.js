const buttonIdea = document.querySelector("#idea");
const modal = document.querySelector("#modal");
const close = document.querySelector("#modal .header a");
const closeButton = document.querySelector("#modal button");
const ideaButton = document.getElementById("idea");

buttonIdea.addEventListener("click", () =>{
    if(ideaValue !=0){
        modal.classList.remove("hide")
        var texto = document.createTextNode(currentQuestion.dica);
        idea.appendChild(texto);
        ideaValue = 0;
        ideaButton.style.background = "#443b3b";
        ideaButton.style.borderStyle = "none";
        ideaButton.style.cursor = "none";
    }
})

close.addEventListener("click", ()=>{
    modal.classList.add("hide")
})

closeButton.addEventListener("click", ()=>{
    modal.classList.add("hide")
})

