import mongoose, { Document, Schema } from 'mongoose'

export interface IRoom extends Document {
  name: string
  description?: string
  type: 'public' | 'private'
  createdBy: mongoose.Types.ObjectId
  members: mongoose.Types.ObjectId[]
  createdAt: Date
  updatedAt: Date
}

const RoomSchema = new Schema<IRoom>({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100
  },
  description: {
    type: String,
    maxlength: 500
  },
  type: {
    type: String,
    enum: ['public', 'private'],
    default: 'public'
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  members: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }]
}, {
  timestamps: true
})

export default mongoose.model<IRoom>('Room', RoomSchema)