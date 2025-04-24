const socket = io();
const input = document.getElementById('m');
const messages = document.getElementById('messages');

function sendMessage() {
  const message = input.value;
  if (message.trim() !== '') {
    socket.emit('chat message', message);
    input.value = '';
  }
}

socket.on('chat message', (msg) => {
  const item = document.createElement('li');
  item.textContent = msg;
  messages.appendChild(item);
});
