// MongoDB initialization script
db = db.getSiblingDB('chat-app');

// Create application user
db.createUser({
  user: 'chatappuser',
  pwd: 'password123',
  roles: [
    {
      role: 'readWrite',
      db: 'chat-app'
    }
  ]
});

// Create initial collections with indexes
db.createCollection('users');
db.users.createIndex({ "email": 1 }, { unique: true });
db.users.createIndex({ "username": 1 }, { unique: true });

db.createCollection('rooms');
db.rooms.createIndex({ "name": 1 });
db.rooms.createIndex({ "createdBy": 1 });

db.createCollection('messages');
db.messages.createIndex({ "roomId": 1 });
db.messages.createIndex({ "senderId": 1 });
db.messages.createIndex({ "createdAt": -1 });

// Create a default public room
db.rooms.insertOne({
  name: 'General',
  description: 'General chat room for everyone',
  type: 'public',
  createdBy: null,
  members: [],
  createdAt: new Date(),
  updatedAt: new Date()
});

print('MongoDB initialized successfully for Chat App!');