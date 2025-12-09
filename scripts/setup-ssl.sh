#!/bin/bash

# SquidPong SSL Setup Script
# This script sets up Let's Encrypt SSL certificates for your DuckDNS domain

set -e

DOMAIN="squid-pong.duckdns.org"
EMAIL="your-email@example.com"  # Change this to your email

echo "🔧 Setting up SSL for $DOMAIN"
echo "======================================"

# Check if running as root
if [ "$EUID" -ne 0 ]; then 
    echo "❌ Please run as root (use sudo)"
    exit 1
fi

# Install Certbot if not installed
if ! command -v certbot &> /dev/null; then
    echo "📦 Installing Certbot..."
    apt update
    apt install -y certbot python3-certbot-nginx
else
    echo "✅ Certbot already installed"
fi

# Stop nginx temporarily to allow Certbot to bind to port 80
echo "🛑 Stopping Nginx..."
docker-compose down nginx 2>/dev/null || systemctl stop nginx 2>/dev/null || true

# Get Let's Encrypt certificate
echo "🔐 Obtaining Let's Encrypt certificate..."
certbot certonly --standalone \
    -d $DOMAIN \
    --email $EMAIL \
    --agree-tos \
    --non-interactive \
    --preferred-challenges http

if [ $? -eq 0 ]; then
    echo "✅ Certificate obtained successfully!"
    echo ""
    echo "Certificate location:"
    echo "  - Fullchain: /etc/letsencrypt/live/$DOMAIN/fullchain.pem"
    echo "  - Private Key: /etc/letsencrypt/live/$DOMAIN/privkey.pem"
else
    echo "❌ Failed to obtain certificate"
    exit 1
fi

# Set up auto-renewal
echo "⏰ Setting up automatic renewal..."
(crontab -l 2>/dev/null || echo "") | grep -v "certbot renew" | { cat; echo "0 3 * * * certbot renew --quiet --deploy-hook 'docker-compose -f /home/$(whoami)/Desktop/SquidPong-Backend/docker-compose.yml restart nginx'"; } | crontab -

echo ""
echo "✅ SSL Setup Complete!"
echo "======================================"
echo ""
echo "Next steps:"
echo "1. Update docker-compose.yml to mount SSL certificates"
echo "2. Restart your services: docker-compose up -d"
echo "3. Test your HTTPS endpoint: https://$DOMAIN/api/auth/health"
echo ""
echo "Your certificates will auto-renew every 3 months at 3 AM."
