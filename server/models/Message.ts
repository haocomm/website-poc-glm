import mongoose, { Document, Schema } from 'mongoose'

export interface IMessage extends Document {
  content: string
  type: 'text' | 'image' | 'file'
  sender: mongoose.Types.ObjectId
  room: mongoose.Types.ObjectId
  createdAt: Date
  updatedAt: Date
}

const MessageSchema = new Schema<IMessage>({
  content: {
    type: String,
    required: true,
    maxlength: 2000
  },
  type: {
    type: String,
    enum: ['text', 'image', 'file'],
    default: 'text'
  },
  sender: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  room: {
    type: Schema.Types.ObjectId,
    ref: 'Room',
    required: true
  }
}, {
  timestamps: true
})

// Index for efficient querying
MessageSchema.index({ room: 1, createdAt: -1 })

export default mongoose.model<IMessage>('Message', MessageSchema)