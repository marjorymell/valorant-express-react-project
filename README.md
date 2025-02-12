# Valorant Info

A full-stack application built with React and Express.js that provides Valorant game information and user management features with robust security measures.

## 🚀 Technologies

### Frontend

- React.js with Hooks and Context API
- Material-UI for responsive design
- React Router for navigation

### Backend

- Node.js & Express.js
- MongoDB with Mongoose
- Redis for caching
- JWT authentication

## ✨ Features

### Frontend

- Agent, weapon, and map information display
- Dynamic search functionality
- Responsive Material-UI components
- Global state management with Context API
- Form validation and error handling

### Backend

- Secure JWT authentication
- Input sanitization and validation
- Rate limiting protection
- Redis caching for performance
- Comprehensive error logging
- Data compression

## 🔒 Security Features

- Password hashing with bcrypt
- XSS attack prevention
- Input sanitization
- Rate limiting
- Secure token management
- Error logging and monitoring

## 📡 API Endpoints

```
# Auth Routes
POST /api/auth/register  - Register user
POST /api/auth/login     - Login user
POST /api/auth/logout    - Logout user

# Nickname Routes
POST /api/nicknames      - Add nickname
GET /api/nicknames       - Get nicknames
DELETE /api/nicknames    - Delete nickname
```

## 🔧 Setup

1. Install dependencies:

```bash
npm install
```

2. Environment variables (/server):

```env
PORT=3500
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
REDIS_HOST=your_redis_host
```

3. Start the application:

```bash
# Backend
npm run server

# Frontend
npm run client
```

4. This will open the app in your browser at http://localhost:3000.

## 🎯 Performance Optimizations

- Redis caching for frequently accessed data
- Frontend component optimization with useCallback
- Response compression
- Connection pooling
