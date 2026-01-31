#  Task Manager – Full Stack Application

A simple full stack **Task Management Web Application** that allows users to create, view, update, and delete tasks.  
This project demonstrates complete **CRUD functionality** using a RESTful API and a clean frontend interface.

---

##  Features

- Add new tasks
- View all tasks
- Update task status
- Delete tasks
- Persistent data storage using MongoDB Atlas

---

## 🛠️ Tech Stack

### Frontend
- HTML
- CSS
- JavaScript (Vanilla)

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas

### Tools
- Git & GitHub
- Thunder Client (API testing)

---

## 📂 Project Structure
task-manager/
│
├── backend/
│ ├── models/
│ │ └── Task.js
│ ├── routes/
│ │ └── taskRoutes.js
│ ├── index.js
│ ├── package.json
│ └── .env
│
├── frontend/
│ ├── index.html
│ ├── style.css
│ └── script.js
│
└── README.md

---

## ⚙️ Setup Instructions
git clone https://github.com/SharonRose-2003/task-manager.git
cd task-manager

Backend Setup
cd backend
npm install
Create a .env file inside the backend folder:
MONGO_URI=your_mongodb_connection_string
Start the backend server:
node index.js
Server will run on:
http://localhost:5000

Frontend Setup
cd frontend
Open index.html in your browser
(or use Live Server extension in VS Code).

<img width="1920" height="1080" alt="task" src="https://github.com/user-attachments/assets/ac990f0c-3933-4d33-8bb8-c867e65883fa" />
Author
Rose
Information Science & Engineering Student

Notes
This project was built as part of a Full Stack Development Internship Assignment.
Focus was on clean architecture, REST APIs, and MongoDB integration.
