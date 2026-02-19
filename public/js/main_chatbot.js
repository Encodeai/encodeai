import { Chatbot } from './chatbot.js';

const chatIcon = document.getElementById('chat-icon');
const chatWindow = document.getElementById('chat-window');
const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

const bot = new Chatbot(chatMessages, userInput, sendBtn);

chatIcon.addEventListener('click', () => {
  chatWindow.style.display = chatWindow.style.display === 'flex'? 'none':'flex';
  if(chatWindow.style.display === 'flex') bot.startFlow('mainMenu');
});

sendBtn.addEventListener('click', () => bot.submitLead());
userInput.addEventListener('keypress', (e) => {
  if(e.key === 'Enter') bot.submitLead();
});
