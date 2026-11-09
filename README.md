# Project Management App — Backend

Backend API for a full-stack Project Management application built with Node.js, Express, MongoDB, and Mongoose.

The API will handle authentication, projects, and tasks for the React frontend.

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt
- dotenv
- cors
- morgan
- nodemon

## Features

Currently implemented:

- Express server setup
- MongoDB connection
- Environment variable configuration

Planned features:

- User signup
- User login
- Password hashing with bcrypt
- JWT authentication
- Protected routes
- Create, read, update, and delete projects
- Create, update, and delete tasks
- User-specific projects and tasks

## Project Structure

```text
backend/
├── src/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── projectController.js
│   │   └── taskController.js
│   │
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   └── errorMiddleware.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   ├── Project.js
│   │   └── Task.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── projectRoutes.js
│   │   └── taskRoutes.js
│   │
│   ├── app.js
│   └── server.js
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## Getting Started

### 1. Clone the repository

```bash
git clone YOUR_REPOSITORY_URL
```

Navigate into the project:

```bash
cd project-management-app-backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create environment variables

Create a `.env` file in the root directory.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
NODE_ENV=development
```

Do not commit the `.env` file to GitHub.

Your `.gitignore` should include:

```gitignore
node_modules/
.env
```

## Running the Project

Start the development server:

```bash
npm run dev
```

Start the production server:

```bash
npm start
```

The development server runs on:

```text
http://localhost:5000
```

## Available Scripts

```bash
npm run dev
```

Runs the backend using Nodemon and automatically restarts the server when files change.

```bash
npm start
```

Runs the backend using Node.js.

## API Endpoints

The following endpoints are planned for the application.

### Authentication

```text
POST /api/auth/signup
POST /api/auth/login
GET  /api/auth/me
```

### Projects

```text
GET    /api/projects
POST   /api/projects
GET    /api/projects/:projectId
PUT    /api/projects/:projectId
DELETE /api/projects/:projectId
```

### Tasks

```text
POST   /api/projects/:projectId/tasks
PUT    /api/tasks/:taskId
DELETE /api/tasks/:taskId
```

## Data Models

### User

```text
fullName
email
password
createdAt
updatedAt
```

### Project

```text
title
description
dueDate
user
createdAt
updatedAt
```

### Task

```text
text
project
user
createdAt
updatedAt
```

## Authentication

Authentication will use JSON Web Tokens.

Passwords will be hashed using bcrypt before being stored in MongoDB.

Protected project and task routes will only be accessible to authenticated users.

## Frontend

The frontend is built with React and Vite.

The backend will provide the API used by the frontend for authentication, project management, and task management.

## Development Status

This project is currently under development.

Current progress:

```text
Express server          ✅
MongoDB connection      ✅
User model              🚧
Signup API              ⏳
Login API               ⏳
JWT authentication      ⏳
Project API             ⏳
Task API                ⏳
Frontend integration    ⏳
```

## Author

Hamdan

## License

ISC
