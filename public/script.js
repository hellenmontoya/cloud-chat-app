const socket = io();

const usernameInput = document.getElementById('username');
const input = document.getElementById('m');
const messages = document.getElementById('messages');

function sendMessage() {
  const username = usernameInput.value.trim();
  const text = input.value.trim();

  if (username && text) {
    socket.emit('chat message', {
      user: username,
      text: text
    });
    input.value = '';
  }
}
function addEmoji(emoji) {
  const input = document.getElementById('m');
  input.value += emoji;
  input.focus();
}


socket.on('chat message', (data) => {
  const item = document.createElement('li');
  item.textContent = `[${data.user}]: ${data.text}`;
  messages.appendChild(item);
});

