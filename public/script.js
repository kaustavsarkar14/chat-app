const submitButton = document.getElementById('submit')
const form = document.querySelector('.userNameInputDiv')
const chatContainer = document.querySelector('.chatContainer')
const usernameInput = document.getElementById('username')

usernameInput.focus()
let username = ''

form.addEventListener('submit', e=>{
    e.preventDefault()
    username = usernameInput.value
    form.style.display = "none"
    chatContainer.style.display = "flex"
})