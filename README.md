# Elara Chatbot 🤖

A modern conversational chatbot built using Node.js and the Gemini API, featuring a responsive UI, theme toggling, local chat history, and typing animation effects.

## 🚀 Features

- ✨ Clean UI with dark/light theme toggle
- 💬 Chat interface with typing animation
- 🧠 Powered by Gemini API (via secure backend proxy)
- 💾 Chat history saved in `localStorage`
- 🔒 API key secured in `server.js` (not exposed on frontend)
- 📋 Copy-to-clipboard functionality for messages

---

## 🖥️ Frontend

- HTML, CSS, JavaScript (Vanilla)
- Responsive layout with suggestions and chat bubbles
- `/frontend` directory

---

## 🛠️ Backend

- Node.js + Express
- Handles requests to the Gemini API securely
- Environment variables stored in `.env`
- `/backend` directory

---

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/tanmayj2004/chatbot.git
cd chatbot

2. Backend Setup
bash
Copy
Edit
cd backend
npm install
Create a .env file in /backend and add your Gemini API key:

ini
Copy
Edit
API_KEY=your_gemini_api_key
PORT=3000
3. Start the Server
bash
Copy
Edit
node server.js
It runs on: http://localhost:3000

4. Run Frontend
Open frontend/index.html directly in your browser or serve via Live Server.

🧠 Gemini API
This chatbot uses Gemini Pro for natural language generation.

Requests are routed through the backend to protect the API key.

🧪 Development Notes
Keep your API_KEY in the .env file (never expose it on frontend).

Ensure CORS is enabled in backend (cors middleware).

Frontend JavaScript calls / on backend with a POST request containing the user input.

📁 Folder Structure
pgsql
Copy
Edit
chatbot/
├── backend/
│   ├── server.js
│   ├── package.json
│   └── .env
├── frontend/
│   ├── index.html
│   ├── script.js
│   ├── style.css
│   └── images/
└── README.md
