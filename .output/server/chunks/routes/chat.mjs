import express from 'express';
import jwt from 'jsonwebtoken';
import mongoose, { Schema } from 'mongoose';

const RoomSchema = new Schema({
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
    enum: ["public", "private"],
    default: "public"
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  members: [{
    type: Schema.Types.ObjectId,
    ref: "User"
  }]
}, {
  timestamps: true
});
const Room = mongoose.model("Room", RoomSchema);

const MessageSchema = new Schema({
  content: {
    type: String,
    required: true,
    maxlength: 2e3
  },
  type: {
    type: String,
    enum: ["text", "image", "file"],
    default: "text"
  },
  sender: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  room: {
    type: Schema.Types.ObjectId,
    ref: "Room",
    required: true
  }
}, {
  timestamps: true
});
MessageSchema.index({ room: 1, createdAt: -1 });
const Message = mongoose.model("Message", MessageSchema);

const router = express.Router();
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ error: "Access token required" });
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: "Invalid token" });
    }
    req.user = user;
    next();
  });
};
router.get("/rooms", authenticateToken, async (req, res) => {
  try {
    const rooms = await Room.find({ type: "public" }).populate("createdBy", "username").populate("members", "username isOnline").sort({ updatedAt: -1 });
    res.json({ rooms });
  } catch (error) {
    console.error("Get rooms error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
router.post("/rooms", authenticateToken, async (req, res) => {
  try {
    const { name, description, type = "public" } = req.body;
    if (!name) {
      return res.status(400).json({ error: "Room name is required" });
    }
    const room = new Room({
      name,
      description,
      type,
      createdBy: req.user.userId,
      members: [req.user.userId]
    });
    await room.save();
    await room.populate("createdBy", "username");
    res.status(201).json({
      message: "Room created successfully",
      room
    });
  } catch (error) {
    console.error("Create room error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
router.get("/rooms/:roomId/messages", authenticateToken, async (req, res) => {
  try {
    const { roomId } = req.params;
    const { page = 1, limit = 50 } = req.query;
    const room = await Room.findById(roomId);
    if (!room || !room.members.includes(req.user.userId)) {
      return res.status(403).json({ error: "Access denied" });
    }
    const messages = await Message.find({ room: roomId }).populate("sender", "username avatar").sort({ createdAt: -1 }).limit(Number(limit) * Number(page)).skip((Number(page) - 1) * Number(limit));
    res.json({ messages: messages.reverse() });
  } catch (error) {
    console.error("Get messages error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
router.post("/rooms/:roomId/join", authenticateToken, async (req, res) => {
  try {
    const { roomId } = req.params;
    const room = await Room.findById(roomId);
    if (!room) {
      return res.status(404).json({ error: "Room not found" });
    }
    if (room.type === "private") {
      return res.status(403).json({ error: "Cannot join private room" });
    }
    if (!room.members.includes(req.user.userId)) {
      room.members.push(req.user.userId);
      await room.save();
    }
    res.json({ message: "Joined room successfully" });
  } catch (error) {
    console.error("Join room error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export { router as default };
//# sourceMappingURL=chat.mjs.map
