# Chat App - Real-time Chat Application

A modern real-time chat application built with Nuxt 4, Express, MongoDB, and Socket.IO.

## Tech Stack

- **Frontend**: Nuxt 4 + NuxtUI 4
- **Backend**: Node.js + Express + TypeScript
- **Database**: MongoDB with Mongoose
- **Real-time**: Socket.IO
- **Authentication**: JWT tokens

## Features

- Real-time messaging
- Multiple chat rooms
- User authentication (register/login)
- Online user presence
- Typing indicators
- Responsive design
- Dark mode support

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm package manager
- MongoDB (local or cloud instance)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd website-poc-glm
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```

   Edit `.env` with your configuration:
   ```
   PORT=3001
   MONGODB_URI=mongodb://localhost:27017/chat-app
   JWT_SECRET=your-secret-key
   ```

4. **Start the development servers**
   ```bash
   pnpm start:full
   ```

   This will start both the frontend (http://localhost:3000) and backend (http://localhost:3001) concurrently.

## Development Scripts

- `pnpm dev` - Start Nuxt frontend only
- `pnpm server:dev` - Start Express backend only
- `pnpm start:full` - Start both frontend and backend
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build

## Project Structure

```
website-poc-glm/
├── pages/                 # Nuxt pages
│   ├── index.vue         # Landing page
│   ├── auth/             # Authentication pages
│   └── chat.vue          # Main chat interface
├── server/               # Backend code
│   ├── models/           # MongoDB models
│   ├── routes/           # API routes
│   ├── socket/           # Socket.IO handlers
│   └── config/           # Server configuration
├── assets/               # CSS and static assets
└── components/           # Vue components
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login

### Chat
- `GET /api/chat/rooms` - Get all public rooms
- `POST /api/chat/rooms` - Create new room
- `GET /api/chat/rooms/:id/messages` - Get room messages
- `POST /api/chat/rooms/:id/join` - Join a room

## Socket.IO Events

### Client to Server
- `join-room` - Join a chat room
- `leave-room` - Leave a chat room
- `send-message` - Send a message
- `typing-start` - Start typing indicator
- `typing-stop` - Stop typing indicator

### Server to Client
- `new-message` - Receive new message
- `user-joined` - User joined room
- `user-left` - User left room
- `user-typing` - User typing indicator

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License