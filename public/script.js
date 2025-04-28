// public/script.js

const socket = io();

const usernameInput = document.getElementById('username');
const input         = document.getElementById('m');
const messages      = document.getElementById('messages');

// Send a chat message
function sendMessage() {
  const username = usernameInput.value.trim();
  const text     = input.value.trim();

  if (username && text) {
    // emit an object containing user, text, and the current time
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    socket.emit('chat message', { user: username, text: text, time: timeString });
    input.value = '';
  }
}

// Insert an emoji into the input
function addEmoji(emoji) {
  input.value += emoji;
  input.focus();
}

// When a chat message arrives, render it
socket.on('chat message', (data) => {
  const item = document.createElement('li');
  
  // Build the message text: "[HH:MM] - user: text"
  const messageText = document.createElement('span');
  messageText.textContent = `[${data.time}] – ${data.user}: ${data.text}`;
  
  // Create a “Reply” button
  const replyButton = document.createElement('button');
  replyButton.textContent = 'Reply';
  replyButton.style.marginLeft = '10px';
  replyButton.onclick = () => {
    input.value = `@${data.user} `;
    input.focus();
  };

  // Assemble and append
  item.appendChild(messageText);
  item.appendChild(replyButton);
  messages.appendChild(item);

  // Scroll to bottom
  window.scrollTo(0, document.body.scrollHeight);
});
