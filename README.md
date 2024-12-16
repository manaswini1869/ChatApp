# Fullstack Chat App with MERN (MongoDB, Express, React, Node)

Welcome to my **MERN Chat App** project! This is a real-time chat application built using the **MERN** stack (MongoDB, Express, React, Node.js). The app features real-time messaging, user authentication, online indicators, file uploads, conversation history, and more.

It's a complete full-stack project that demonstrates how to implement key features of a chat system using modern web technologies like WebSockets, MongoDB, JWT authentication, and Tailwind CSS.

---

## Features

- **Real-Time Messaging**: WebSocket integration for live communication between users.
- **User Authentication**: Secure login and registration system with JWT tokens.
- **Online Indicator**: Shows which users are currently online.
- **File Uploads**: Attach files (images, documents) to messages.
- **Auto-Scrolling**: Automatically scrolls to the newest message in a conversation.
- **Conversation History**: Messages are stored in MongoDB and are fetched when users open a chat.
- **Reconnection Logic**: Automatically reconnect users in case of connection failure.
- **User Avatars**: Each user can have an avatar displayed in the chat interface.
- **Responsive Design**: Built with React and Tailwind CSS for a sleek and mobile-friendly interface.

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) (or use a cloud MongoDB service like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))

### Clone the Repository

```
git clone [https://github.com/dejwid/mern-chat.git](https://github.com/manaswini1869/ChatApp.git)
cd ChatApp
```
### Install Dependencies
Backend (Node/Express)
Navigate to the server directory and install the required dependencies:

```
cd server
npm install
```
### Frontend (React)
Next, navigate to the client directory and install the frontend dependencies:

```
cd ../client
npm install
```
### Set Up MongoDB
You need a running MongoDB instance. You can run it locally or use MongoDB Atlas for a cloud-based solution. Create a .env file in the server folder and add your MongoDB connection string like this:
```
MONGO_URI=mongodb://your_mongo_connection_string_here
```

### Run the Application
#### Start the Backend Server
To start the backend (Node/Express):

```
cd server
npm start
```
#### Start the Frontend
To start the frontend (React):
```
cd client
npm start
```
Now, the app should be running on http://localhost:3000.

### Key Concepts and Technologies
- **MERN Stack**: I used the MERN stack (MongoDB, Express, React, Node.js) to build a fullstack application. MongoDB stores user data and chat messages, while Express and Node handle server-side logic and WebSocket connections. React is used for the frontend to provide a dynamic, interactive UI.

- **WebSockets**: Real-time communication is powered by WebSockets. This allows messages to be sent and received instantly without the need to refresh the page.

- **JWT Authentication**: Users can sign up and log in securely with JWT (JSON Web Tokens). Authentication is handled in Express using Passport.js and JWT tokens to maintain session integrity.

- **Tailwind CSS**: The UI is styled using Tailwind CSS, a utility-first CSS framework. This makes it easy to design responsive and clean layouts with minimal custom CSS.

- **MongoDB**: I used MongoDB to store user details, messages, and chat history. This ensures persistence across sessions.

### Features Breakdown
- **Real-Time Messaging**: Messages are exchanged in real-time using WebSockets, making the chat experience feel instant.

- **User Authentication**: Users can register and log in with a secure authentication system that uses hashed passwords and JWT for session management.

- **Online Status**: The app shows whether a user is online or offline, using WebSocket events to track user connections.

- **File Uploads**: You can upload files (e.g., images, documents) directly in the chat. The app uses multer middleware to handle file uploads on the server side.

- **Auto-Scrolling**: The chat window automatically scrolls to the newest message as it arrives, making it user-friendly and intuitive.

- **Conversation History**: All messages are stored in MongoDB, and users can retrieve the conversation history when opening a chat.

- **Reconnection Logic**: If the WebSocket connection drops, the app will automatically attempt to reconnect without disrupting the user experience.

- **Responsive Design**: The frontend is built to be mobile-responsive, ensuring the chat app works well on all screen sizes.

### Future Improvements
This project is a work in progress, and I plan to add more features in the future, such as:

- **Push Notifications**: Notify users when they receive a new message.
- **Dark Mode**: A dark mode theme for the chat interface.
- **Group Chats**: Allow users to create and manage group chats.
- **Message Search**: Implement message search functionality to find specific conversations or messages.
- **User Profiles**: Allow users to update their profiles, including uploading profile pictures and setting their status.
### Technologies Used
- **MongoDB**: NoSQL database for storing user and message data.
- **Express**: Backend framework for building RESTful APIs.
- **Node.js**: JavaScript runtime environment for the backend.
- **React**: Frontend framework for building user interfaces.
- **WebSockets (Socket.io)**: Real-time communication between clients and server.
- **Tailwind CSS**: Utility-first CSS framework for building modern UIs.
- **JWT**: JSON Web Tokens for user authentication and session management.
