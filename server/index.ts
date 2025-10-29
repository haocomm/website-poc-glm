import express from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'
import cors from 'cors'
import * as dotenv from 'dotenv'
import { connectDatabase } from './config/database'
import authRoutes from './routes/auth'
import chatRoutes from './routes/chat'
import { setupSocketHandlers } from './socket/socketHandlers'

// Load environment variables
dotenv.config()

const app = express()
const server = createServer(app)
const io = new Server(server, {
  cors: {
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    methods: ["GET", "POST"]
  }
})

// Middleware
app.use(cors())
app.use(express.json())

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  })
})

// API Routes
app.use('/api/auth', authRoutes)
app.use('/api/chat', chatRoutes)

// Socket.IO setup
setupSocketHandlers(io)

// Start server
const PORT = process.env.PORT || 3001

async function startServer() {
  try {
    // Connect to MongoDB
    await connectDatabase()
    console.log('✅ Connected to MongoDB')

    // Start server
    server.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`)
      console.log(`📡 Socket.IO server ready`)
    })
  } catch (error) {
    console.error('❌ Failed to start server:', error)
    process.exit(1)
  }
}

startServer()

export { app, io }