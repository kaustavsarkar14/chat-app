let socket = io()
const submitButton = document.getElementById('submit')
const form = document.querySelector('.userNameInputDiv')
const chatContainer = document.querySelector('.chatContainer')
const usernameInput = document.getElementById('username')
const messageInput = document.getElementById('messageInput')
const sendButton = document.getElementById('sendButton')
const chatArea = document.getElementById('chatArea')

usernameInput.focus()
let username = ''

form.addEventListener('submit', e=>{
    e.preventDefault()
    username = usernameInput.value
    form.style.display = "none"
    chatContainer.style.display = "flex"
    messageInput.focus()
})

sendButton.addEventListener('click',e=>{
    e.preventDefault()
    let data = {
        id: socket.id, 
        username : username,
        message : messageInput.value, 
    }
    socket.emit('echo123', data)
    renderMessage(data, 'sentMsg')
})

socket.on('echo123',data=>{
    if(data.id!==socket.id){
        renderMessage(data, 'receivedMsg')
    }
})

function renderMessage(data, msgType){
    const msgDiv = document.createElement('div')
    msgDiv.innerText = `${data.username} : ${data.message}`
    msgDiv.className = msgType
    chatArea.appendChild(msgDiv)
    messageInput.value = ''
}