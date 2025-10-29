import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'
import User from '../models/User'

export interface AuthRequest extends Request {
  user?: any
}

export const authenticateToken = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1] // Bearer TOKEN

    if (!token) {
      return res.status(401).json({
        error: 'Access token required'
      })
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { userId: string }

    // Find user and attach to request
    const user = await User.findById(decoded.userId).select('-password')

    if (!user) {
      return res.status(401).json({
        error: 'Invalid token - user not found'
      })
    }

    req.user = user
    next()
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(401).json({
        error: 'Invalid token'
      })
    }

    if (error instanceof jwt.TokenExpiredError) {
      return res.status(401).json({
        error: 'Token expired'
      })
    }

    console.error('Auth middleware error:', error)
    return res.status(500).json({
      error: 'Internal server error'
    })
  }
}

export const optionalAuth = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (!token) {
      return next() // No token provided, continue without user
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { userId: string }
    const user = await User.findById(decoded.userId).select('-password')

    if (user) {
      req.user = user
    }

    next()
  } catch (error) {
    // For optional auth, we don't return errors, just continue without user
    next()
  }
}