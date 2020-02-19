let buttonDarkmode = document.querySelector(".lamp");
let logo = document.querySelector(".logo");
let body = document.querySelector("body");
let buttonWantToHelp = document.querySelector("header button");
let form = document.querySelector(".form");
let formButton = document.querySelector(".form button")

buttonWantToHelp.addEventListener("click", () => {
  form.classList.toggle("hide");
});

formButton.addEventListener("click", () => {
  window.location.reload()
})

// buttonDarkmode.addEventListener('click', () => {
//     body.classList.toggle('dark-mode')
// })


