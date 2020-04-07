const socket = io();

const chatForm = document.getElementById('chat-form');
const chatMessages = document.querySelector('.chat-messages');
const roomNameRef = document.getElementById('room-name');
const userListRef = document.getElementById('users');

// Get username and room from URL params
const {username, room } = Qs.parse(location.search, {
    ignoreQueryPrefix: true
})

// Join chatroom
socket.emit('joinRoom', {username, room});

// Get room and users
socket.on('roomUsers', ({room, users })=>{
    outputRoomName(room);
    outputUserList(users);
});

// Message event from the server
socket.on('message', message => {
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

    // Clear message input
    e.target.elements.msg.value = '';
    e.target.elements.msg.focus();
});

// Display message to DOM
function outputMessage(message){
    const div = document.createElement('div');

    div.classList.add('message');
    div.innerHTML = `
        <p class="meta">${message.username} <span>${message.time}</span></p>
        <p class="text">${message.text}</p>
    `;
    document.querySelector('.chat-messages').appendChild(div);
}

// Add room name to DOM
function outputRoomName(room){
    roomNameRef.innerText = room;
}

// Add user list to DOM
function outputUserList(users){
    userListRef.innerHTML = `
        ${users.map(user=> `<li>${user.username}</li>`).join()}
    `;
}

