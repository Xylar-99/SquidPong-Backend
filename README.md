# SquidPong Backend 🏓

A microservices-based backend for a real-time multiplayer Pong game platform.

## 🏗️ Architecture

```
┌─────────────┐
│    Nginx    │ (Reverse Proxy on port 8080)
└─────────────┘
       │
┌─────────────┐
│   Gateway   │ (API Gateway with WebSocket support)
└─────────────┘
       │
┌──────┴──────────────────────────────┐
│   Auth │ User │ Chat │ Game │ etc.  │ (Microservices)
└────────────────────────────────────┘
       │
┌──────┴────────────┐
│ Redis │ RabbitMQ  │ (Infrastructure)
└───────────────────┘
```

## 🚀 Services

- **Gateway** (Port 4000): API Gateway with authentication & WebSocket routing
- **Auth** (Port 4001): Authentication, OAuth (Google, 42), 2FA
- **User** (Port 4002): User profiles, friends, blocking
- **Chat** (Port 4003): Real-time chat, groups, polls
- **Game** (Port 4005): Game server using Colyseus
- **Notify** (Port 4004): Email notifications
- **Tournament** (Port 4006): Tournament management

## 📋 Prerequisites

- Docker & Docker Compose
- Node.js 20+ (for local development)
- Make (optional, for convenience commands)

## 🔧 Setup

### 1. Clone the repository

```bash
git clone https://github.com/Xylar-99/SquidPong-Backend.git
cd SquidPong-Backend
```

### 2. Configure environment variables

Each service needs a `.env` file. Copy the example files:

```bash
# Gateway
cp backend/gateway/.env.example backend/gateway/.env

# Auth Service
cp backend/services/auth/.env.example backend/services/auth/.env

# Repeat for other services as needed
```

**Important:** Edit each `.env` file with your actual credentials:
- OAuth credentials (Google, 42 Intra)
- JWT secrets
- Email API keys (Resend)
- Database URLs

### 3. Start the services

Using Docker Compose:

```bash
docker-compose up -d
```

Using Make:

```bash
make up
```

### 4. Access the API

The backend will be available at:
- **Local:** `http://localhost:8080`
- **Health checks:** 
  - `http://localhost:8080/api/user/health`
  - `http://localhost:8080/api/auth/health`
  - etc.

## 🛠️ Development

### View logs

```bash
# All services
docker-compose logs -f

# Specific service
docker-compose logs -f gateway
docker-compose logs -f auth
```

### Restart a service

```bash
docker-compose restart gateway
```

### Rebuild after code changes

```bash
docker-compose up -d --build
```

## 📚 API Documentation

Swagger documentation is available for each service:
- User Service: `http://localhost:8080/api/user/docs`
- Auth Service: Prisma Studio on port 5001
- Chat Service: Prisma Studio on port 5003

## 🔐 Security Notes

- **Never commit `.env` files** - they contain sensitive credentials
- Use strong, unique values for all secrets
- Rotate OAuth credentials regularly
- Keep dependencies updated

## 🌐 CORS Configuration

The backend is configured to accept requests from:
- `https://frontend-squid-poing.vercel.app` (production)
- `http://localhost:3000` (local Next.js)
- `http://localhost:5173` (local Vite)

## 📁 Project Structure

```
SquidPong-Backend/
├── backend/
│   ├── gateway/           # API Gateway
│   └── services/
│       ├── auth/          # Authentication
│       ├── user/          # User management
│       ├── chat/          # Chat service
│       ├── game/          # Game server
│       ├── notify/        # Notifications
│       └── tournament/    # Tournaments
├── nginx.conf             # Nginx configuration
├── docker-compose.yml     # Docker services
└── scripts/               # Utility scripts
```

## 🐛 Troubleshooting

### Port 80 already in use

If you see "address already in use" for port 80:

```bash
# Check what's using port 80
sudo lsof -i :80

# Stop Apache2 if running
sudo systemctl stop apache2
```

The project uses port 8080 by default to avoid conflicts.

### Database issues

Reset a service database:

```bash
docker-compose exec auth npx prisma migrate reset
```

### WebSocket connection issues

Ensure nginx is properly routing WebSocket connections. Check `nginx.conf` for `/events` and `/matches` locations.

## 📄 License

[Add your license here]

## 👥 Contributors

[Add contributors]
