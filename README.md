# SquidPong Backend 🏓

A microservices-based backend system for the SquidPong application, built with Node.js, TypeScript, and Fastify.

## 📋 Table of Contents

- [Architecture](#architecture)
- [Services](#services)
- [Prerequisites](#prerequisites)
- [Quick Start](#quick-start)
- [Development](#development)
- [API Documentation](#api-documentation)
- [Database](#database)
- [Message Queue & Caching](#message-queue--caching)
- [File Uploads](#file-uploads)
- [Environment Variables](#environment-variables)
- [Docker](#docker)
- [Contributing](#contributing)

## 🏗️ Architecture

SquidPong Backend follows a microservices architecture with the following components:

```
┌─────────────────┐    ┌─────────────┐
│     Frontend    │────│    Caddy    │
│   (React/Vue)   │    │ (Reverse    │
└─────────────────┘    │   Proxy)    │
                       └─────────────┘
                              │
                       ┌─────────────┐
                       │   Gateway   │
                       │  (Fastify)  │
                       └─────────────┘
                              │
        ┌─────────────────────┼─────────────────────┐
        │                     │                     │
   ┌─────────┐         ┌─────────────┐       ┌─────────────┐
   │   Auth  │         │    User     │       │    Chat     │
   │Service  │         │   Service   │       │   Service   │
   └─────────┘         └─────────────┘       └─────────────┘
        │                     │                     │
   ┌─────────┐         ┌─────────────┐       ┌─────────────┐
   │Tournament│        │   Notify    │       │    Game     │
   │Service  │         │   Service   │       │   Service   │
   └─────────┘         └─────────────┘       └─────────────┘
        │                     │                     │
   ┌─────────────────────────────────────────────────────┐
   │                  Shared Services                    │
   │  ┌─────────┐  ┌─────────┐  ┌─────────────────────┐ │
   │  │  Redis  │  │RabbitMQ │  │     SQLite DBs      │ │
   │  │(Cache)  │  │ (Queue) │  │(Auth/User/Chat/etc) │ │
   │  └─────────┘  └─────────┘  └─────────────────────┘ │
   └─────────────────────────────────────────────────────┘
```

## 🚀 Services

### Gateway Service
- **Port**: 4000
- **Role**: API Gateway, routing, authentication, and request proxying
- **Tech Stack**: Fastify, TypeScript
- **Features**:
  - Request routing to microservices
  - Authentication middleware
  - WebSocket support
  - CORS handling

### Auth Service
- **Port**: 5001 (Prisma Studio)
- **Role**: User authentication and authorization
- **Features**:
  - JWT token management
  - OAuth2 integration
  - 2FA support (TOTP)
  - Session management

### User Service
- **Port**: 5002 (Prisma Studio)
- **Role**: User profile and account management
- **Features**:
  - User profile CRUD operations
  - Avatar uploads
  - User preferences

### Chat Service
- **Port**: 5004 (Prisma Studio)
- **Role**: Real-time messaging
- **Features**:
  - Direct messaging
  - Group chat
  - File sharing
  - Message history

### Notification Service
- **Port**: 5003 (Prisma Studio)
- **Role**: Push notifications and alerts
- **Features**:
  - Real-time notifications
  - Email notifications
  - Push notifications

### Tournament Service
- **Role**: Tournament and competition management
- **Features**:
  - Tournament creation and management
  - Bracket generation
  - Scoring system

### Game Service
- **Port**: 3000 (Game Server), 5005 (Prisma Studio)
- **Role**: Real-time game logic and state management
- **Tech Stack**: Colyseus (Real-time multiplayer framework)
- **Features**:
  - Game room management
  - Real-time game state synchronization
  - Player matchmaking

## 📋 Prerequisites

- **Docker** (v20.10+)
- **Docker Compose** (v2.0+)
- **Node.js** (v18+) - for development
- **npm** or **yarn** - for package management

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/TRAN5PONG/SquidPong-Backend.git
   cd SquidPong-Backend
   ```

2. **Set up environment variables**
   ```bash
   # Copy example env files (you'll need to create these)
   cp backend/gateway/.env.example backend/gateway/.env
   cp backend/services/auth/.env.example backend/services/auth/.env
   cp backend/services/user/.env.example backend/services/user/.env
   cp backend/services/chat/.env.example backend/services/chat/.env
   cp backend/services/notify/.env.example backend/services/notify/.env
   cp backend/services/tournament/.env.example backend/services/tournament/.env
   ```

3. **Start all services**
   ```bash
   make up
   ```
   or
   ```bash
   docker compose up --build
   ```

4. **Access the application**
   - Frontend: http://localhost:8080
   - API Gateway: http://localhost:4000
   - Prisma Studio (Auth): http://localhost:5001
   - Prisma Studio (User): http://localhost:5002
   - Prisma Studio (Chat): http://localhost:5004
   - Prisma Studio (Notify): http://localhost:5003

## 💻 Development

### Local Development Setup

1. **Install dependencies** (for each service)
   ```bash
   cd backend/gateway && npm install
   cd ../services/auth && npm install
   cd ../user && npm install
   cd ../chat && npm install
   cd ../notify && npm install
   cd ../tournament && npm install
   cd ../game && npm install
   ```

2. **Run database migrations**
   ```bash
   # Each service with Prisma needs its own migration
   cd backend/services/auth && npx prisma migrate dev --name init
   cd ../user && npx prisma migrate dev --name init  
   cd ../chat && npx prisma migrate dev --name init
   cd ../notify && npx prisma migrate dev --name init
   cd ../tournament && npx prisma migrate dev --name init
   cd ../game && npx prisma migrate dev --name init
   ```

3. **Start services individually**
   ```bash
   # Gateway
   cd backend/gateway && npm run dev
   
   # Auth Service
   cd backend/services/auth && npm run dev
   
   # Other services...
   ```

### Available Make Commands

```bash
make up      # Start all services with Docker Compose (--build flag included)
make down    # Stop all services and remove created images  
make fclean  # Complete cleanup: stop services, remove volumes and all images
make re      # Full restart: run fclean then up (clean slate restart)
```

**Detailed Command Breakdown:**

- **`make up`**: Builds and starts all containers in development mode
  - Equivalent to: `docker compose up --build`
  - Creates networks, starts databases, and launches all microservices

- **`make down`**: Graceful shutdown and cleanup
  - Stops all running containers
  - Removes created Docker images to free space
  - Preserves volumes (database data is kept)

- **`make fclean`**: Complete cleanup (use with caution in development)
  - Stops all containers
  - Removes all volumes (⚠️ **deletes all database data**)
  - Removes all images
  - Use when you want a completely fresh start

- **`make re`**: Alias for `make fclean && make up`
  - Complete reset and restart
  - Useful when you want to start from scratch

## 📖 API Documentation

API documentation is available via Swagger UI:
- Auth Service: `http://localhost:4000/api/auth/docs`
- User Service: `http://localhost:4000/api/user/docs`
- Chat Service: `http://localhost:4000/api/chat/docs`
- Other services follow the same pattern

## 🗄️ Database

Each microservice maintains its own **SQLite database** with **Prisma ORM** for data isolation and service independence:

### Service-Specific Databases
- **Auth Service**: `backend/services/auth/prisma/auth.db` - User authentication, tokens, sessions
- **User Service**: `backend/services/user/prisma/user.db` - User profiles, preferences, avatars
- **Chat Service**: `backend/services/chat/prisma/chat.db` - Messages, conversations, chat groups
- **Notification Service**: `backend/services/notify/prisma/notify.db` - Notifications, alerts, push settings
- **Tournament Service**: `backend/services/tournament/prisma/tournament.db` - Tournament data, brackets
- **Game Service**: `backend/services/game/prisma/game.db` - Game states, matches, scores

### Database Management

Each service manages its own database independently:

```bash
# Navigate to specific service directory
cd backend/services/[service-name]

# Generate Prisma client for the service
npx prisma generate

# Run migrations for the service
npx prisma migrate dev

# Access Prisma Studio for the service (runs on service-specific port)
npx prisma studio
```

**Service-specific Prisma Studio ports:**
- Auth: http://localhost:5001
- User: http://localhost:5002  
- Notify: http://localhost:5003
- Chat: http://localhost:5004
- Game: http://localhost:5005

## 📨 Message Queue & Caching

### Redis
- **Usage**: Caching, session storage, real-time data
- **Container**: `redis`
- **Image**: `redis/redis-stack-server:latest`

### RabbitMQ
- **Usage**: Asynchronous message processing between services
- **Container**: `rabbitmq`
- **Image**: `rabbitmq:latest`

## 📁 File Uploads

File uploads are organized in the `uploads/` directory:

```
uploads/
├── user/
│   └── avatar/          # User avatars
│       ├── default.png
│       └── [user-files]
└── chat/
    └── group/           # Group chat files
        ├── default.png
        └── [group-files]
```

## ⚙️ Environment Variables

Create `.env` files for each service with the following variables:

### Gateway Service
```env
PORT=4000
JWT_SECRET=your-jwt-secret
REDIS_URL=redis://redis:6379
RABBITMQ_URL=amqp://rabbitmq:5672
```

### Auth Service
```env
PORT=3000
DATABASE_URL="file:./auth.db"
JWT_SECRET=your-jwt-secret
OAUTH_CLIENT_ID=your-oauth-client-id
OAUTH_CLIENT_SECRET=your-oauth-client-secret
```

### Other Services
Similar pattern with service-specific configurations.

## 🐳 Docker

### Production Build
```bash
docker compose -f docker-compose.prod.yml up --build
```

### Development with Hot Reload
The current `docker-compose.yml` is configured for development with:
- Volume mounts for hot reloading
- Exposed ports for debugging
- Development-specific commands

## 🛠️ Tech Stack

- **Runtime**: Node.js 18+
- **Language**: TypeScript
- **Web Framework**: Fastify
- **Database**: SQLite with Prisma ORM
- **Cache**: Redis
- **Message Queue**: RabbitMQ
- **Authentication**: JWT, OAuth2, TOTP (2FA)
- **Real-time**: WebSockets, Colyseus (for games)
- **Reverse Proxy**: Caddy
- **Containerization**: Docker & Docker Compose

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 🔧 Troubleshooting

### Common Issues

1. **Port conflicts**: Make sure ports 8080, 4000, 5001-5005 are available
2. **Database migrations**: Each service has its own SQLite database - run migrations individually:
   ```bash
   cd backend/services/[service-name] && npx prisma migrate dev --name init
   ```
3. **Permission issues**: Ensure Docker has proper permissions for volume mounts and SQLite files
4. **Service startup order**: Services wait 6 seconds before starting to ensure dependencies are ready
5. **Database reset**: Use `make fclean` carefully - it will delete all SQLite database files
6. **Individual service debugging**: Check specific service logs:
   ```bash
   docker compose logs -f [service-name]
   ```

### Logs

View service logs:
```bash
docker compose logs -f [service-name]
# Example: docker compose logs -f gateway
```

## 📧 Support

For support, please open an issue on the GitHub repository or contact the development team.
