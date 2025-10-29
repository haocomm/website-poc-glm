# MongoDB Setup Guide

This guide explains how to properly configure MongoDB for the Chat Application.

## Docker Setup (Recommended)

### Prerequisites
- Docker and Docker Compose installed
- MongoDB container running with authentication

### Start MongoDB
```bash
# Start MongoDB with Docker Compose
docker-compose up -d mongodb

# Check if MongoDB is running
docker ps | grep mongo
```

### Environment Configuration
Copy the appropriate environment file:

```bash
# For Docker development
cp .env.docker .env

# Or use the local example
cp .env.example .env
```

### MongoDB Connection String
The application uses authenticated MongoDB connection:

```
mongodb://admin:password123@localhost:27017/chat-app?authSource=admin
```

### MongoDB Users
The Docker setup creates two users:

1. **Admin User** (for database management):
   - Username: `admin`
   - Password: `password123`
   - Database: `admin`

2. **Application User** (for app operations):
   - Username: `chatappuser`
   - Password: `password123`
   - Database: `chat-app`
   - Role: `readWrite`

## Manual MongoDB Setup (Without Docker)

### Install MongoDB locally
```bash
# Ubuntu/Debian
sudo apt-get install -y mongodb

# macOS with Homebrew
brew install mongodb-community

# Windows
# Download and install from MongoDB website
```

### Start MongoDB
```bash
# Start MongoDB service
sudo systemctl start mongod  # Linux
brew services start mongodb-community  # macOS
```

### Environment Configuration
```bash
# Use local MongoDB without authentication
cp .env.example .env
# Edit .env and uncomment:
# MONGODB_URI=mongodb://localhost:27017/chat-app
```

## Troubleshooting

### Authentication Failed Error
If you get `MongoServerError: Authentication failed`, check:

1. **MongoDB is running with authentication**:
   ```bash
   docker ps | grep mongo
   ```

2. **Correct connection string in .env**:
   ```
   MONGODB_URI=mongodb://admin:password123@localhost:27017/chat-app?authSource=admin
   ```

3. **User exists in MongoDB**:
   ```bash
   docker exec chat-app-mongodb mongosh --eval "use admin; db.getUsers()"
   ```

### Connection Refused Error
1. Check MongoDB is running: `docker ps | grep mongo`
2. Check port 27017 is available: `netstat -tulpn | grep :27017`
3. Verify MongoDB container logs: `docker logs chat-app-mongodb`

### Database Initialization
The Docker setup automatically:
- Creates the `chat-app` database
- Creates necessary collections with indexes
- Adds a default "General" chat room
- Creates the application user

### Manual Database Setup
If you need to set up the database manually:

```javascript
// Connect to MongoDB
mongo mongodb://admin:password123@localhost:27017/chat-app?authSource=admin

// Create collections and indexes
use chat-app
db.createCollection('users')
db.users.createIndex({ "email": 1 }, { unique: true })
db.users.createIndex({ "username": 1 }, { unique: true })

db.createCollection('rooms')
db.rooms.createIndex({ "name": 1 })
db.rooms.createIndex({ "createdBy": 1 })

db.createCollection('messages')
db.messages.createIndex({ "roomId": 1 })
db.messages.createIndex({ "senderId": 1 })
db.messages.createIndex({ "createdAt": -1 })
```

## Production Considerations

For production deployment:

1. **Use strong passwords** for MongoDB users
2. **Enable SSL/TLS** connections
3. **Use MongoDB Atlas** or cloud-hosted MongoDB
4. **Set up proper backup strategy**
5. **Configure firewall rules**
6. **Monitor database performance**

### Production Environment Variables
```bash
# Production MongoDB (example with Atlas)
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/chat-app?retryWrites=true&w=majority

# Strong JWT Secret
JWT_SECRET=your-super-strong-random-jwt-secret-key-64-characters-long
```