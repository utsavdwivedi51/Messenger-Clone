const chatBox = document.getElementById('chatBox');
const messageInput = document.getElementById('messageInput');
const sendBtn = document.getElementById('sendBtn');
const themeToggle = document.getElementById('themeToggle');

let isDarkMode = false;

const autoResponses = [
  "That's interesting! Tell me more.",
  "I see what you mean!",
  "Great point! 👍",
  "Thanks for sharing!",
  "I agree with you.",
  "That makes sense.",
  "Awesome! 🎉",
  "I'm here if you need anything!",
  "Got it!",
  "Interesting perspective!"
];

function addMessage(text, type) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message', type);
  messageDiv.textContent = text;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getRandomResponse() {
  return autoResponses[Math.floor(Math.random() * autoResponses.length)];
}

function sendMessage() {
  const text = messageInput.value.trim();
  
  if (text === '') return;
  
  addMessage(text, 'sent');
  messageInput.value = '';
  
  setTimeout(() => {
    addMessage(getRandomResponse(), 'received');
  }, 500 + Math.random() * 1000);
}

sendBtn.addEventListener('click', sendMessage);

messageInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    sendMessage();
  }
});

themeToggle.addEventListener('click', () => {
  isDarkMode = !isDarkMode;
  document.body.classList.toggle('dark-mode');
  themeToggle.textContent = isDarkMode ? '☀️' : '🌙';
});

addMessage('Hey! Welcome to Messenger Clone! 👋', 'received');
