# 🚀 Chat App Deployment Guide

This guide provides comprehensive instructions for deploying the real-time chat application using Docker Compose.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Quick Start (Development)](#quick-start-development)
3. [Production Deployment](#production-deployment)
4. [Environment Configuration](#environment-configuration)
5. [Docker Compose Files](#docker-compose-files)
6. [Monitoring and Maintenance](#monitoring-and-maintenance)
7. [Troubleshooting](#troubleshooting)

## Prerequisites

Before deploying the application, ensure you have the following installed:

- **Docker** (version 20.10 or later)
- **Docker Compose** (version 2.0 or later)
- **Git** (for cloning the repository)

```bash
# Verify Docker installation
docker --version
docker-compose --version

# Or if using Docker Compose V2
docker compose version
```

## Quick Start (Development)

For quick development setup with default configurations:

```bash
# 1. Clone the repository
git clone https://github.com/haocomm/website-poc-glm.git
cd website-poc-glm

# 2. Copy environment file
cp .env.docker .env

# 3. Start all services
docker-compose up -d

# 4. Check service status
docker-compose ps
```

**Access Points:**
- 🌐 Frontend: http://localhost:3000
- 🔧 Backend API: http://localhost:3001
- 🗄️ MongoDB: localhost:27017
- 🔴 Redis: localhost:6379

## Production Deployment

### Step 1: Prepare Environment

```bash
# 1. Clone the repository
git clone https://github.com/haocomm/website-poc-glm.git
cd website-poc-glm

# 2. Create production environment file
cp .env.prod.example .env.prod

# 3. Edit production environment variables
nano .env.prod
```

### Step 2: Configure Production Values

Update `.env.prod` with your production values:

```bash
# Security (CHANGE THESE!)
MONGO_ROOT_USERNAME=your-secure-username
MONGO_ROOT_PASSWORD=your-super-secure-password-256-bits
JWT_SECRET=your-jwt-secret-256-bits-minimum
REDIS_PASSWORD=your-secure-redis-password

# URLs
FRONTEND_URL=https://yourdomain.com
BACKEND_URL=https://api.yourdomain.com
API_BASE_URL=https://api.yourdomain.com/api

# Ports (adjust if needed)
FRONTEND_PORT=3000
BACKEND_PORT=3001
```

### Step 3: Deploy Services

```bash
# Deploy production services
docker-compose -f docker-compose.prod.yml --env-file .env.prod up -d

# Check deployment status
docker-compose -f docker-compose.prod.yml ps
```

### Step 4: Verify Deployment

```bash
# Check logs for each service
docker-compose -f docker-compose.prod.yml logs -f
docker-compose -f docker-compose.prod.yml logs backend
docker-compose -f docker-compose.prod.yml logs frontend

# Test health endpoints
curl http://localhost:3001/health
curl http://localhost:3000
```

## Environment Configuration

### Development Environment (.env.docker)

| Variable | Default Value | Description |
|----------|---------------|-------------|
| `MONGO_ROOT_USERNAME` | admin | MongoDB root username |
| `MONGO_ROOT_PASSWORD` | password123 | MongoDB root password |
| `JWT_SECRET` | your-super-secure-jwt-secret | JWT signing secret |
| `FRONTEND_URL` | http://localhost:3000 | Frontend URL |
| `BACKEND_URL` | http://localhost:3001 | Backend URL |

### Production Environment (.env.prod)

Critical security variables that **must be changed** in production:

- `MONGO_ROOT_PASSWORD` - MongoDB root password
- `MONGO_APP_PASSWORD` - Application database password
- `JWT_SECRET` - JWT token signing secret (minimum 256 bits)
- `REDIS_PASSWORD` - Redis authentication password

## Docker Compose Files

### Development: `docker-compose.yml`

- Includes all services for development
- Builds images from source
- Includes development tools and hot reload
- Exposes all ports for local access

### Production: `docker-compose.prod.yml`

- Optimized for production deployment
- Uses multi-stage builds for smaller images
- Includes health checks
- Adds Redis for session storage
- Includes Nginx reverse proxy (optional)

### Services Overview

#### Frontend (Nuxt.js)
- **Port**: 3000
- **Build**: Multi-stage Docker build
- **Environment**: NODE_ENV=production
- **Health Check**: HTTP endpoint check

#### Backend (Express.js)
- **Port**: 3001
- **Build**: Multi-stage Docker build
- **Environment**: NODE_ENV=production
- **Health Check**: `/health` endpoint

#### MongoDB
- **Port**: 27017
- **Image**: mongo:7.0
- **Volumes**: Persistent data storage
- **Initialization**: Custom script creates user and indexes

#### Redis
- **Port**: 6379
- **Image**: redis:7.2-alpine
- **Volumes**: Persistent data storage
- **Configuration**: AOF persistence enabled

## Monitoring and Maintenance

### View Logs

```bash
# View all service logs
docker-compose logs -f

# View specific service logs
docker-compose logs -f backend
docker-compose logs -f frontend
docker-compose logs -f mongodb
```

### Service Management

```bash
# Stop all services
docker-compose down

# Stop and remove volumes (⚠️ DELETES DATA)
docker-compose down -v

# Restart specific service
docker-compose restart backend

# Update and rebuild services
docker-compose up -d --build
```

### Database Management

```bash
# Connect to MongoDB
docker-compose exec mongodb mongo -u chatappuser -p password123 chat-app

# Connect to Redis
docker-compose exec redis redis-cli -a redis-password-12345
```

### Backup Database

```bash
# Create MongoDB backup
docker-compose exec mongodb mongodump --out /tmp/backup --authenticationDatabase admin -u chatappuser -p password123

# Copy backup from container
docker cp $(docker-compose ps -q mongodb):/tmp/backup ./mongodb-backup-$(date +%Y%m%d)
```

## Troubleshooting

### Common Issues

#### 1. Port Conflicts
```bash
# Check what's using ports
netstat -tulpn | grep :3000
netstat -tulpn | grep :3001

# Solution: Change ports in .env file
```

#### 2. Permission Issues
```bash
# Fix Docker permissions
sudo usermod -aG docker $USER
newgrp docker
```

#### 3. MongoDB Connection Issues
```bash
# Check MongoDB logs
docker-compose logs mongodb

# Verify MongoDB is running
docker-compose exec mongodb mongo --eval "db.adminCommand('ismaster')"
```

#### 4. Build Failures
```bash
# Clean and rebuild
docker-compose down
docker system prune -f
docker-compose build --no-cache
docker-compose up -d
```

#### 5. Frontend Not Loading
```bash
# Check Nuxt build
docker-compose logs frontend

# Rebuild frontend
docker-compose build --no-cache frontend
docker-compose up -d frontend
```

### Health Checks

```bash
# Check service health
docker-compose ps

# Manual health checks
curl -f http://localhost:3001/health || echo "Backend unhealthy"
curl -f http://localhost:3000 || echo "Frontend unhealthy"
```

### Performance Monitoring

```bash
# Monitor resource usage
docker stats

# Monitor disk usage
docker system df

# Check container sizes
docker-compose ps --size
```

## Security Considerations

1. **Change Default Passwords**: Always change default passwords in production
2. **Use HTTPS**: Configure SSL certificates for production
3. **Network Security**: Use firewall rules to restrict access
4. **Regular Updates**: Keep Docker images updated
5. **Backup Strategy**: Implement regular database backups

## SSL/HTTPS Setup (Optional)

For production deployment with HTTPS:

1. **Obtain SSL certificates** (Let's Encrypt recommended)
2. **Configure Nginx** with SSL certificates
3. **Update environment variables** with HTTPS URLs
4. **Restart services**

```bash
# Enable HTTPS in production
FRONTEND_URL=https://yourdomain.com
BACKEND_URL=https://api.yourdomain.com
```

## Support

For deployment issues:

1. Check this documentation first
2. Review service logs for error messages
3. Verify environment configuration
4. Check Docker and system requirements
5. Create an issue in the GitHub repository

---

**🎉 Congratulations! Your real-time chat application is now deployed with Docker Compose!**