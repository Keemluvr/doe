let buttonDarkmode = document.querySelector(".lamp");
let logo = document.querySelector(".logo");
let body = document.querySelector("body");
let buttonWantToHelp = document.querySelector("header button");
let form = document.querySelector(".form");
let formButton = document.querySelector(".form button")

// Abre o form para inscrever doador
buttonWantToHelp.addEventListener("click", () => {
  form.classList.toggle("hide");
});


// Recarega ao enviar um novo doador
formButton.addEventListener("click", () => {
  window.location.reload()
})


// Botão de escurecer a tela
buttonDarkmode.addEventListener('click', () => {
    body.classList.toggle('dark-mode')
    if (body.classList.contains('dark-mode')) 
      logo.setAttribute('src', "assets/img/logo-light.png")
    else
      logo.setAttribute('src', "assets/img/logo.png")
})


