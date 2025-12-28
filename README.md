# Automation Super-Brain (Public Mode)

Automation design agent for n8n + Zapier workflows.

## Endpoints
GET  /health
POST /design
POST /login (only if auth enabled)

## Public Mode
- No auth required
- No secrets required
- Safe for public repos

## Private Mode
- Set OWNER_EMAIL + JWT_SECRET
- Auth auto-enables (no code change)