import { Server, Socket } from 'socket.io'
import jwt from 'jsonwebtoken'
import User from '../models/User'

interface AuthenticatedSocket extends Socket {
  userId?: string
  username?: string
}

export function setupSocketHandlers(io: Server): void {
  // Authentication middleware for Socket.IO
  io.use(async (socket: AuthenticatedSocket, next) => {
    try {
      const token = socket.handshake.auth.token

      if (!token) {
        return next(new Error('Authentication error: No token provided'))
      }

      const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { userId: string }
      const user = await User.findById(decoded.userId)

      if (!user) {
        return next(new Error('Authentication error: User not found'))
      }

      socket.userId = (user._id as any).toString()
      socket.username = user.username

      next()
    } catch (error) {
      next(new Error('Authentication error: Invalid token'))
    }
  })

  io.on('connection', (socket: AuthenticatedSocket) => {
    console.log(`✅ User connected: ${socket.username} (${socket.userId})`)

    // Join user to their own room for private messages
    socket.join(socket.userId!)

    // Handle joining a chat room
    socket.on('join-room', (roomId: string) => {
      socket.join(roomId)
      socket.to(roomId).emit('user-joined', {
        userId: socket.userId,
        username: socket.username,
        timestamp: new Date().toISOString()
      })
    })

    // Handle leaving a chat room
    socket.on('leave-room', (roomId: string) => {
      socket.leave(roomId)
      socket.to(roomId).emit('user-left', {
        userId: socket.userId,
        username: socket.username,
        timestamp: new Date().toISOString()
      })
    })

    // Handle sending messages
    socket.on('send-message', (data) => {
      const { roomId, content, type = 'text' } = data

      const messageData = {
        id: `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        userId: socket.userId,
        username: socket.username,
        content,
        type,
        timestamp: new Date().toISOString()
      }

      // Send message to all users in the room
      io.to(roomId).emit('new-message', messageData)
    })

    // Handle typing indicators
    socket.on('typing-start', (roomId: string) => {
      socket.to(roomId).emit('user-typing', {
        userId: socket.userId,
        username: socket.username,
        isTyping: true
      })
    })

    socket.on('typing-stop', (roomId: string) => {
      socket.to(roomId).emit('user-typing', {
        userId: socket.userId,
        username: socket.username,
        isTyping: false
      })
    })

    // Handle disconnection
    socket.on('disconnect', () => {
      console.log(`❌ User disconnected: ${socket.username} (${socket.userId})`)
    })
  })
}