let buttonWantToHelp = document.querySelector('header button')
let form = document.querySelector('.form')

buttonWantToHelp.addEventListener('click', () => {
    form.classList.toggle('hide')
})