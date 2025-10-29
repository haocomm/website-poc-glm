# Chat App Docker Deployment Makefile

.PHONY: help build up down logs clean dev prod status backup restore

# Default target
help:
	@echo "🚀 Chat App Docker Deployment Commands"
	@echo ""
	@echo "Development Commands:"
	@echo "  dev      - Start development environment"
	@echo "  build    - Build Docker images"
	@echo "  up       - Start all services in background"
	@echo "  down     - Stop all services"
	@echo "  logs     - Show service logs"
	@echo "  status   - Show service status"
	@echo "  clean    - Clean up Docker resources"
	@echo ""
	@echo "Production Commands:"
	@echo "  prod     - Start production environment"
	@echo "  prod-down - Stop production environment"
	@echo "  prod-logs - Show production logs"
	@echo ""
	@echo "Utility Commands:"
	@echo "  backup   - Backup MongoDB data"
	@echo "  restore  - Restore MongoDB data"
	@echo "  shell    - Open shell in backend container"
	@echo "  mongo    - Connect to MongoDB shell"
	@echo "  redis    - Connect to Redis CLI"

# Development Commands
dev:
	@echo "🔧 Starting development environment..."
	cp .env.docker .env
	docker-compose up --build

prod:
	@echo "🚀 Starting production environment..."
	docker-compose -f docker-compose.prod.yml --env-file .env.prod up --build -d

build:
	@echo "🏗️  Building Docker images..."
	docker-compose build

up:
	@echo "⬆️  Starting services..."
	docker-compose up -d

down:
	@echo "⬇️  Stopping services..."
	docker-compose down

prod-down:
	@echo "⬇️  Stopping production services..."
	docker-compose -f docker-compose.prod.yml down

logs:
	docker-compose logs -f

prod-logs:
	docker-compose -f docker-compose.prod.yml logs -f

status:
	@echo "📊 Service Status:"
	docker-compose ps

clean:
	@echo "🧹 Cleaning up Docker resources..."
	docker-compose down -v
	docker system prune -f
	docker volume prune -f

# Utility Commands
backup:
	@echo "💾 Creating MongoDB backup..."
	docker-compose exec mongodb mongodump --out /tmp/backup --authenticationDatabase admin -u chatappuser -p password123
	docker cp $$(docker-compose ps -q mongodb):/tmp/backup ./mongodb-backup-$$(date +%Y%m%d-%H%M%S)
	@echo "✅ Backup completed!"

restore:
	@echo "📥 Restoring MongoDB backup..."
	@if [ -z "$(BACKUP_DIR)" ]; then echo "❌ Usage: make restore BACKUP_DIR=backup-directory"; exit 1; fi
	docker cp $(BACKUP_DIR) $$(docker-compose ps -q mongodb):/tmp/restore/
	docker-compose exec mongodb mongorestore --authenticationDatabase admin -u chatappuser -p password123 /tmp/restore

shell:
	@echo "🐚 Opening shell in backend container..."
	docker-compose exec backend sh

mongo:
	@echo "🗄️  Connecting to MongoDB shell..."
	docker-compose exec mongodb mongo -u chatappuser -p password123 chat-app

redis:
	@echo "🔴 Connecting to Redis CLI..."
	docker-compose exec redis redis-cli -a redis-password-12345

# Quick start commands
quick-start: dev

quick-prod: prod

# Installation commands
install-docker:
	@echo "📦 Installing Docker and Docker Compose..."
	@echo "Please visit https://docs.docker.com/get-docker/ for installation instructions"

# Test commands
test:
	@echo "🧪 Running tests..."
	docker-compose exec backend npm test

health-check:
	@echo "🏥 Checking service health..."
	@echo "Backend Health:"
	@curl -f http://localhost:3001/health || echo "❌ Backend unhealthy"
	@echo "Frontend Health:"
	@curl -f http://localhost:3000 || echo "❌ Frontend unhealthy"
	@echo "MongoDB Status:"
	@docker-compose exec -T mongodb mongo --eval "db.adminCommand('ping')" || echo "❌ MongoDB unhealthy"
	@echo "Redis Status:"
	@docker-compose exec -T redis redis-cli -a redis-password-12345 ping || echo "❌ Redis unhealthy"