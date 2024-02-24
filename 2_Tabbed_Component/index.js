const buttons = document.querySelectorAll('button')
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const clicked_btn_id = button.dataset.btn

    const displayContent = document.querySelector(`.content-${clicked_btn_id}`)

    // Selecting Active content and removing active class from it, and adding it to clicked element.
    const activeContent = document.querySelector('.active-content')
    activeContent.classList.remove('active-content')
    displayContent.classList.add('active-content')

    // Selecting Active button and removing active class from it, and adding it to clicked button.
    const activeBtn = document.querySelector('.active-btn')
    activeBtn.classList.remove('active-btn')
    button.classList.add('active-btn')
  })
})
