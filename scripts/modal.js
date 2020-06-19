const buttonPlay = document.querySelector("a#name")
const modal = document.querySelector("#modal")
const close = document.querySelector("#modal .header a")
const form = document.getElementById('form-modal')
const buttonIdea = document.querySelector("#idea")



buttonPlay.addEventListener("click", () =>{
    modal.classList.remove("hide")
})

close.addEventListener("click", ()=>{
    modal.classList.add("hide")
})

form.addEventListener("submit", ()=>{
    localStorage.setItem("username", document.getElementById("input-name").value)
})

