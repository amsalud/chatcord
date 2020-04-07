const socket = io();

const chatForm = document.getElementById('chat-form');
const chatMessages = document.querySelector('.chat-messages');

// Message event from the server
socket.on('message', message => {
    console.log(message);
    outputMessage(message);

    // Scroll down
    chatMessages.scrollTop = chatMessages.scrollHeight;
});

//Message submit
chatForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    // Get message text
    const msg = e.target.elements.msg.value;

    // Emit message to server
    socket.emit('chatMessage', msg);
});

// Display message to DOM
function outputMessage(message){
    const div = document.createElement('div');

    div.classList.add('message');
    div.innerHTML = `
        <p class="meta">Brad <span>9:12pm</span></p>
        <p class="text">${message}</p>
    `;
    document.querySelector('.chat-messages').appendChild(div);
}
