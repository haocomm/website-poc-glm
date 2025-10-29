# 🚀 Chat App - Real-time Chat Application

A modern real-time chat application built with Nuxt 4, Express, MongoDB, and Socket.IO.

## ✨ Features

- 🔐 **Secure Authentication**: JWT-based user registration and login
- 💬 **Real-time Messaging**: Instant chat with Socket.IO
- 🏠 **Multiple Chat Rooms**: Create and join different rooms
- 👥 **Online Presence**: See who's online and typing indicators
- 📱 **Responsive Design**: Works perfectly on mobile and desktop
- 🌙 **Dark Mode**: Built-in theme switching
- 🐳 **Docker Ready**: One-command deployment with Docker Compose

## 🛠️ Tech Stack

- **Frontend**: Nuxt 4 + NuxtUI 4 + Vue 3
- **Backend**: Node.js + Express + TypeScript
- **Database**: MongoDB with Mongoose ODM
- **Real-time**: Socket.IO for live messaging
- **Authentication**: JWT tokens with bcrypt security
- **Deployment**: Docker + Docker Compose
- **Cache**: Redis for session storage (production)

## 🚀 Quick Start

### Option 1: Docker (Recommended) 🐳

**Prerequisites**: Docker & Docker Compose

```bash
# 1. Clone the repository
git clone https://github.com/haocomm/website-poc-glm.git
cd website-poc-glm

# 2. Start with Docker Compose
make dev

# Or manually:
cp .env.docker .env
docker-compose up -d

# 3. Access the application
# Frontend: http://localhost:3000
# Backend API: http://localhost:3001
```

### Option 2: Local Development

**Prerequisites**: Node.js 18+, pnpm, MongoDB

```bash
# 1. Clone and install
git clone https://github.com/haocomm/website-poc-glm.git
cd website-poc-glm
pnpm install

# 2. Set up environment
cp .env.example .env
# Edit .env with your MongoDB URI and JWT secret

# 3. Start development servers
pnpm start:full
```

**Access Points**:
- 🌐 **Frontend**: http://localhost:3000
- 🔧 **Backend API**: http://localhost:3001
- 🗄️ **MongoDB**: localhost:27017
- 🔴 **Redis**: localhost:6379

## 🐳 Docker Deployment

### Development Environment
```bash
# Start all services
make dev

# View logs
make logs

# Stop services
make down

# Clean up
make clean
```

### Production Environment
```bash
# 1. Configure production environment
cp .env.prod.example .env.prod
# Edit .env.prod with your production values

# 2. Deploy production services
make prod

# 3. Check service health
make health-check
```

**Available Commands**:
- `make help` - Show all available commands
- `make status` - Check service status
- `make mongo` - Connect to MongoDB shell
- `make redis` - Connect to Redis CLI
- `make backup` - Backup MongoDB data
- `make restore BACKUP_DIR=path` - Restore from backup

📖 **For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)**

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