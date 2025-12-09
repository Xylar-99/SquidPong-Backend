# HTTPS Setup Guide for SquidPong Backend

## ✅ What's Been Done

1. **DuckDNS Domain Created**: `squid-pong.duckdns.org` → `178.128.177.136`
2. **Nginx Configuration Updated**: Now listens on ports 80 (HTTP) and 443 (HTTPS)
3. **SSL Setup Script Created**: Automates Let's Encrypt certificate installation
4. **Docker Compose Updated**: Mounts Let's Encrypt certificates

## 🚀 Quick Setup (Run on Your Server)

### Step 1: Make the setup script executable
```bash
cd /home/xylar-99/Desktop/SquidPong-Backend
chmod +x scripts/setup-ssl.sh
```

### Step 2: Edit the setup script with your email
```bash
nano scripts/setup-ssl.sh
# Change this line:
# EMAIL="your-email@example.com"  # Change this to your actual email
```

### Step 3: Run the SSL setup script (requires sudo)
```bash
sudo ./scripts/setup-ssl.sh
```

This script will:
- Install Certbot
- Stop Nginx temporarily
- Obtain a Let's Encrypt certificate for `squid-pong.duckdns.org`
- Set up automatic renewal (every 3 months)

### Step 4: Restart your services
```bash
docker-compose down
docker-compose up -d
```

### Step 5: Test your HTTPS endpoint
```bash
curl https://squid-pong.duckdns.org/api/auth/health
```

## 🔧 Configuration Changes Made

### 1. nginx.conf
- Now listens on port 443 (HTTPS) and 80 (HTTP)
- HTTP automatically redirects to HTTPS
- Added CORS headers for `https://squid-pong.vercel.app`
- SSL certificates from Let's Encrypt
- Rate limiting for API routes
- WebSocket support with longer timeouts

### 2. docker-compose.yml
- Nginx now exposes ports 80 and 443 (instead of 4000)
- Mounts `/etc/letsencrypt` for Let's Encrypt certificates
- Keeps fallback self-signed certificates

## 📱 Update Your Frontend

### Fetch Requests
```javascript
fetch("https://squid-pong.duckdns.org/api/auth/login", {
  method: "POST",
  credentials: "include",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ email, password })
});
```

### WebSocket Connection
```javascript
const ws = new WebSocket("wss://squid-pong.duckdns.org/events");
```

## 🍪 Update Backend Cookie Settings

Make sure your Fastify backend sets cookies with these options:

```typescript
reply.setCookie('access_token', token, {
  httpOnly: true,
  secure: true,      // Required for HTTPS
  sameSite: 'none',  // Required for cross-origin (Vercel → DigitalOcean)
  path: '/',
  domain: '.duckdns.org'  // Optional: allows subdomains
});
```

## 🔄 Certificate Renewal

Certificates are automatically renewed via cron job:
- Runs daily at 3 AM
- Automatically restarts Nginx after renewal
- Check renewal status: `sudo certbot renew --dry-run`

## 🐛 Troubleshooting

### Certificate Not Found
```bash
# Check if certificate exists
sudo ls -la /etc/letsencrypt/live/squid-pong.duckdns.org/

# If not, run setup script again
sudo ./scripts/setup-ssl.sh
```

### Nginx Won't Start
```bash
# Check nginx logs
docker logs nginx

# Test nginx configuration
docker exec nginx nginx -t
```

### Port Already in Use
```bash
# Check what's using port 80/443
sudo lsof -i :80
sudo lsof -i :443

# Stop the service if needed
sudo systemctl stop apache2  # or whatever is running
```

### CORS Errors
Make sure your frontend is deployed at `https://squid-pong.vercel.app`. If you use a different domain, update `nginx.conf`:

```nginx
add_header 'Access-Control-Allow-Origin' 'https://your-actual-domain.com' always;
```

## 📊 Endpoints

After setup, your API will be available at:

- **API Gateway**: `https://squid-pong.duckdns.org/api/*`
- **Game WebSocket**: `wss://squid-pong.duckdns.org/matches`
- **Events WebSocket**: `wss://squid-pong.duckdns.org/events`

## ✨ Benefits

✅ **Trusted HTTPS Certificate** - No browser warnings  
✅ **Automatic Renewal** - No manual certificate management  
✅ **CORS Working** - Frontend can communicate with backend  
✅ **Cookies Working** - Secure, httpOnly cookies supported  
✅ **WebSocket Support** - WSS (secure WebSocket) enabled  
✅ **Production Ready** - Industry-standard SSL/TLS configuration  

## 🔐 Security Features

- TLS 1.2 and 1.3 only
- Strong cipher suites
- HTTP to HTTPS redirect
- Rate limiting (10 requests/second per IP)
- HttpOnly cookies
- Secure headers

## 📞 Need Help?

If you encounter any issues:
1. Check Docker logs: `docker-compose logs nginx`
2. Verify DNS: `nslookup squid-pong.duckdns.org`
3. Test SSL: `openssl s_client -connect squid-pong.duckdns.org:443`
