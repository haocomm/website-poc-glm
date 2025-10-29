import express from 'express'
import jwt from 'jsonwebtoken'
import Room from '../models/Room'
import Message from '../models/Message'
import User from '../models/User'

const router = express.Router()

// Authentication middleware
const authenticateToken = (req: any, res: any, next: any) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (!token) {
    return res.status(401).json({ error: 'Access token required' })
  }

  jwt.verify(token, process.env.JWT_SECRET!, (err: any, user: any) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid token' })
    }
    req.user = user
    next()
  })
}

// Get all public rooms
router.get('/rooms', authenticateToken, async (req, res) => {
  try {
    const rooms = await Room.find({ type: 'public' })
      .populate('createdBy', 'username')
      .populate('members', 'username isOnline')
      .sort({ updatedAt: -1 })

    res.json({ rooms })
  } catch (error) {
    console.error('Get rooms error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// Create a new room
router.post('/rooms', authenticateToken, async (req: any, res) => {
  try {
    const { name, description, type = 'public' } = req.body

    if (!name) {
      return res.status(400).json({ error: 'Room name is required' })
    }

    const room = new Room({
      name,
      description,
      type,
      createdBy: req.user.userId,
      members: [req.user.userId]
    })

    await room.save()
    await room.populate('createdBy', 'username')

    res.status(201).json({
      message: 'Room created successfully',
      room
    })
  } catch (error) {
    console.error('Create room error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// Get messages for a room
router.get('/rooms/:roomId/messages', authenticateToken, async (req: any, res) => {
  try {
    const { roomId } = req.params
    const { page = 1, limit = 50 } = req.query

    // Check if user is a member of the room
    const room = await Room.findById(roomId)
    if (!room || !room.members.includes(req.user.userId)) {
      return res.status(403).json({ error: 'Access denied' })
    }

    const messages = await Message.find({ room: roomId })
      .populate('sender', 'username avatar')
      .sort({ createdAt: -1 })
      .limit(Number(limit) * Number(page))
      .skip((Number(page) - 1) * Number(limit))

    res.json({ messages: messages.reverse() })
  } catch (error) {
    console.error('Get messages error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// Join a room
router.post('/rooms/:roomId/join', authenticateToken, async (req: any, res) => {
  try {
    const { roomId } = req.params

    const room = await Room.findById(roomId)
    if (!room) {
      return res.status(404).json({ error: 'Room not found' })
    }

    if (room.type === 'private') {
      return res.status(403).json({ error: 'Cannot join private room' })
    }

    if (!room.members.includes(req.user.userId)) {
      room.members.push(req.user.userId)
      await room.save()
    }

    res.json({ message: 'Joined room successfully' })
  } catch (error) {
    console.error('Join room error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

export default router